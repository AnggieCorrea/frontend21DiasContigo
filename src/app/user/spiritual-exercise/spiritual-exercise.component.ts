import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spiritual-exercise',
  templateUrl: './spiritual-exercise.component.html',
  styleUrls: ['./spiritual-exercise.component.scss'],
})
export class SpiritualExerciseComponent implements OnInit {
  showSpam = true;
  showRec = false;
  showTex = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  showRecorder() {
    this.showRec = true;
    this.showSpam = false;
  }
  showTextArea() {
    this.showTex = true;
    this.showSpam = false;
  }
  navContemplationMap() {
    this.router.navigate(['/contemplationsMap']);
  }
}
