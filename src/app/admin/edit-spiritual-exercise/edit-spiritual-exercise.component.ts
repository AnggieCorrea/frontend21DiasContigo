import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpiritualExercise } from 'src/app/models/SpiritualExercise';
import { communicationTypeOfSpiritualExercise } from 'src/app/services/communicationTypeOfSpiritualExercise.service';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';

@Component({
  selector: 'app-edit-spiritual-exercise',
  templateUrl: './edit-spiritual-exercise.component.html',
  styleUrls: ['./edit-spiritual-exercise.component.scss'],
})
export class EditSpiritualExerciseComponent implements OnInit {
  id: string;
  selectedSpiritualExercise: SpiritualExercise;
  typeExercise: string;

  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private spiritualExerciseService: SpiritualExerciseService,
    private communicationService: communicationTypeOfSpiritualExercise
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.spiritualExerciseService.getSpiritualExerciseById(+this.id).subscribe(
      (results) => {
        this.selectedSpiritualExercise = results;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  recibiRespuesta(mensaje: string): void {
    this.typeExercise = mensaje;
  }
  returnToSpiritualExercises(): void {
    this.communicationService.setTypeExercise(
      this.selectedSpiritualExercise.type
    );
    this.typeExercise = this.communicationService.typeExercise;
    this.valueResponse.emit(this.typeExercise);
    this.router.navigate(['/spiritualExerciseAdministration']);
  }
}
