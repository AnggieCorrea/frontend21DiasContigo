import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { communicationTypeOfSpiritualExercise } from 'src/app/services/communicationTypeOfSpiritualExercise.service';

@Component({
  selector: 'app-home-administration',
  templateUrl: './home-administration.component.html',
  styleUrls: ['./home-administration.component.scss'],
})
export class HomeAdministrationComponent implements OnInit {
  typeExercise: string;

  constructor(
    private router: Router,
    private communicationService: communicationTypeOfSpiritualExercise
  ) {}

  ngOnInit(): void {
    this.communicationService.sendTypeExerciseObservable.subscribe(
      (typeExercise) => {
        this.typeExercise = typeExercise;
      }
    );
  }

  contemplationsAdministration(): void {
    this.communicationService.setTypeExercise('contemplation');
    this.typeExercise = this.communicationService.typeExercise;
    this.router.navigate(['/spiritualExerciseAdministration']);
  }

  pausesAdministration(): void {
    this.communicationService.setTypeExercise('pause');
    this.typeExercise = this.communicationService.typeExercise;
    this.router.navigate(['/spiritualExerciseAdministration']);
  }
  stadistics(): void {
    this.router.navigate(['/stadistics']);
  }
}
