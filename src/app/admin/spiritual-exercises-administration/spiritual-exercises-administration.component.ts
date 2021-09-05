import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpiritualExercise } from 'src/app/models/SpiritualExercise';
import { communicationTypeOfSpiritualExercise } from 'src/app/services/communicationTypeOfSpiritualExercise.service';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';

@Component({
  selector: 'app-spiritual-exercises-administration',
  templateUrl: './spiritual-exercises-administration.component.html',
  styleUrls: ['./spiritual-exercises-administration.component.scss'],
})
export class SpiritualExercisesAdministrationComponent implements OnInit {
  typeExercise: string;
  spiritualExercises: SpiritualExercise[];

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
}
