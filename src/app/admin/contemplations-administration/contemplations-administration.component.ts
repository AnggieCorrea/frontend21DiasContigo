import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpiritualExercise } from 'src/app/models/SpiritualExercise';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';

@Component({
  selector: 'app-contemplations-administration',
  templateUrl: './contemplations-administration.component.html',
  styleUrls: ['./contemplations-administration.component.scss'],
})
export class ContemplationsAdministrationComponent implements OnInit {
  spiritualExercises: Array<any>;
  contemplations: Array<SpiritualExercise>;

  constructor(
    private router: Router,
    private spiritualExerciseService: SpiritualExerciseService
  ) {}

  ngOnInit(): void {
    this.spiritualExercises =
      this.spiritualExerciseService.getSpiritualExercises();
    this.contemplations = this.getContemplations();
  }
  getContemplations() {
    let contemplations1 = [];
    for (let spiritualExercise of this.spiritualExercises) {
      if (spiritualExercise.type == 'contemplation')
        contemplations1.push(spiritualExercise);
    }
    return contemplations1;
  }
}
