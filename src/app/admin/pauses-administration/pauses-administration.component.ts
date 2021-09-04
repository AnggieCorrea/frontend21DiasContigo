import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpiritualExercise } from 'src/app/models/SpiritualExercise';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';

@Component({
  selector: 'app-pauses-administration',
  templateUrl: './pauses-administration.component.html',
  styleUrls: ['./pauses-administration.component.scss'],
})
export class PausesAdministrationComponent implements OnInit {
  spiritualExercises: Array<any>;
  pauses: Array<SpiritualExercise>;

  constructor(
    private router: Router,
    private spiritualExerciseService: SpiritualExerciseService
  ) {}

  ngOnInit(): void {
    this.spiritualExercises =
      this.spiritualExerciseService.getSpiritualExercises();
    this.pauses = this.getPauses();
  }
  getPauses() {
    let pauses1 = [];
    for (let spiritualExercise of this.spiritualExercises) {
      if (spiritualExercise.type == 'pause') pauses1.push(spiritualExercise);
    }
    return pauses1;
  }
}
