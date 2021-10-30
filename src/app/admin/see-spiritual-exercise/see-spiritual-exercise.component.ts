import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  showSpam = true;
  showRec = false;
  showTex = false;

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

    console.log(this.id);
    this.spiritualExerciseService.getSpiritualExerciseById(this.id).subscribe(
      (results) => {
        this.selectedSpiritualExercise = results;
        this.day = this.selectedSpiritualExercise.dayIndex;
        this.title = this.selectedSpiritualExercise.title;
        this.sentenceOne = this.selectedSpiritualExercise.sentenceone;
        console.log(this.sentenceOne);
        this.sentenceTwo = this.selectedSpiritualExercise.sentencetwo;
        this.urlAudio = this.selectedSpiritualExercise.urlAudio;
        this.urlImage = this.selectedSpiritualExercise.urlImage;
      },
      (error) => {
        console.log(error);
      }
    );
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
  returnToSpiritualExercises(): void {
    this.communicationService.setTypeExercise(
      this.selectedSpiritualExercise.type
    );
    this.typeExercise = this.communicationService.typeExercise;
    this.valueResponse.emit(this.typeExercise);
    this.router.navigate(['/spiritualExerciseAdministration']);
  }
}
