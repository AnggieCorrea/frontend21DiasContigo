import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pause-exercise',
  templateUrl: './pause-exercise.component.html',
  styleUrls: ['./pause-exercise.component.scss'],
})
export class PauseExerciseComponent implements OnInit {
  showSpam = true;
  showForm = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showFormu() {
    this.showForm = true;
    this.showSpam = false;
  }

  navPauseMap() {
    this.router.navigate(['/pauseMap']);
  }
}
