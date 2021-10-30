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
  typeExercise: string;
  selectedSpiritualExercise: SpiritualExercise;

  //spiritual exercise data
  id: string;
  day: string;
  title: string;
  sentenceOne: string;
  sentenceTwo: string;
  urlAudio: string;
  urlImage: string;

  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private spiritualExerciseService: SpiritualExerciseService,
    private communicationService: communicationTypeOfSpiritualExercise
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.spiritualExerciseService.getSpiritualExerciseById(this.id).subscribe(
      (results) => {
        this.selectedSpiritualExercise = results;
        this.day = this.selectedSpiritualExercise.day;
        this.title = this.selectedSpiritualExercise.title;
        this.sentenceOne = this.selectedSpiritualExercise.sentenceOne;
        console.log(this.sentenceOne);
        this.sentenceTwo = this.selectedSpiritualExercise.sentenceTwo;
        this.urlAudio = this.selectedSpiritualExercise.urlAudio;
        this.urlImage = this.selectedSpiritualExercise.urlImage;
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

  saveSpiritualExercise(): void {
    this.spiritualExerciseService
      .updateSpiritualExercise(this.selectedSpiritualExercise)
      .subscribe(
        (result) => {
          console.log(result);
          this.router.navigateByUrl('');
        },
        (error) => {
          console.error(error);
        }
      );

    this.communicationService.setTypeExercise(
      this.selectedSpiritualExercise.type
    );
    this.typeExercise = this.communicationService.typeExercise;
    this.valueResponse.emit(this.typeExercise);
    this.router.navigate(['/spiritualExerciseAdministration']);
  }
}
