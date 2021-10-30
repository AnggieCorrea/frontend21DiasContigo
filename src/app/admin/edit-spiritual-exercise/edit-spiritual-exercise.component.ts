import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { networkInterfaces } from 'os';
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

  newSpiritualExercise: SpiritualExercise;

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
        this.day = this.selectedSpiritualExercise.dayIndex;
        this.title = this.selectedSpiritualExercise.title;
        this.sentenceOne = this.selectedSpiritualExercise.sentenceone;
        this.sentenceTwo = this.selectedSpiritualExercise.sentencetwo;
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
    var newTitle = (document.getElementById('newTitle') as HTMLInputElement)
      .value;
    var newSentence1 = (
      document.getElementById('newSentence1') as HTMLInputElement
    ).value;
    var newSentence2 = (
      document.getElementById('newSentence2') as HTMLInputElement
    ).value;
    var newUrlAudio = (
      document.getElementById('newUrlAudio') as HTMLInputElement
    ).value;
    var newUrlImage = (
      document.getElementById('newUrlImage') as HTMLInputElement
    ).value;

    this.newSpiritualExercise = new SpiritualExercise(
      this.selectedSpiritualExercise._id,
      this.selectedSpiritualExercise.type,
      this.selectedSpiritualExercise.dayIndex,
      newTitle,
      newSentence1,
      newSentence2,
      newUrlAudio,
      newUrlImage
    );
    this.spiritualExerciseService
      .updateSpiritualExercise(
        this.selectedSpiritualExercise._id,
        this.newSpiritualExercise
      )
      .subscribe(
        (result) => {
          console.log(result);
          //this.router.navigateByUrl('');
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
