import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpiritualExercise } from 'src/app/models/SpiritualExercise';
import { communicationTypeOfSpiritualExercise } from 'src/app/services/communicationTypeOfSpiritualExercise.service';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';
import {
  faEye,
  faPencilAlt,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-spiritual-exercises-administration',
  templateUrl: './spiritual-exercises-administration.component.html',
  styleUrls: ['./spiritual-exercises-administration.component.scss'],
})
export class SpiritualExercisesAdministrationComponent implements OnInit {
  typeExercise: string;
  spiritualExercises: SpiritualExercise[];
  selectedSpiritualExercise: SpiritualExercise;

  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;

  constructor(
    private router: Router,
    private spiritualExerciseService: SpiritualExerciseService,
    private communicationService: communicationTypeOfSpiritualExercise
  ) {}

  ngOnInit(): void {
    this.typeExercise = this.communicationService.typeExercise;
    this.spiritualExercises =
      this.spiritualExerciseService.getSpiritualExercisesByType(
        this.typeExercise
      );
  }

  recibiRespuesta(mensaje: string): void {
    this.typeExercise = mensaje;
    this.spiritualExercises =
      this.spiritualExerciseService.getSpiritualExercisesByType(
        this.typeExercise
      );
  }

  seeSpiritualExercise(id: number): void {
    this.selectedSpiritualExercise =
      this.spiritualExerciseService.getSpiritualExerciseById(id);
    this.router.navigate(['/seeSpiritualExercise/' + id]);
  }

  editSpiritualExercise(id: number): void {
    this.selectedSpiritualExercise =
      this.spiritualExerciseService.getSpiritualExerciseById(id);
    this.router.navigate(['/editSpiritualExercise/' + id]);
  }
}
