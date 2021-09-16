import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpiritualExercise } from 'src/app/models/SpiritualExercise';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';
import { communicationTypeOfSpiritualExercise } from 'src/app/services/communicationTypeOfSpiritualExercise.service';

@Component({
  selector: 'app-see-spiritual-exercise',
  templateUrl: './see-spiritual-exercise.component.html',
  styleUrls: ['./see-spiritual-exercise.component.scss'],
})
export class SeeSpiritualExerciseComponent implements OnInit {
  id: string;
  selectedSpiritualExercise: SpiritualExercise;
  typeExercise: string;

  showSpam = true;
  showRec = false;
  showTex = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private spiritualExerciseService: SpiritualExerciseService,
    private communicationService: communicationTypeOfSpiritualExercise
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.selectedSpiritualExercise =
      this.spiritualExerciseService.getSpiritualExerciseById(+this.id);
    this.typeExercise = this.communicationService.typeExercise;
  }

  recibiRespuesta(mensaje: string): void {
    this.typeExercise = mensaje;
  }
  showRecorder() {
    this.showRec = true;
    this.showSpam = false;
  }
  showTextArea() {
    this.showTex = true;
    this.showSpam = false;
  }
  /* navContemplationMap() {
    this.router.navigate(['/contemplationsMap']);
  } */
}
