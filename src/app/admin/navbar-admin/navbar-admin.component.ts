import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { communicationTypeOfSpiritualExercise } from 'src/app/services/communicationTypeOfSpiritualExercise.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss'],
})
export class NavbarAdminComponent implements OnInit {
  typeExercise: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
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
    this.valueResponse.emit(this.typeExercise);
  }

  pausesAdministration(): void {
    this.communicationService.setTypeExercise('pause');
    this.typeExercise = this.communicationService.typeExercise;
    this.valueResponse.emit(this.typeExercise);
  }

  goHome(): void {
    this.router.navigate(['/homeAdministration']);
  }
}
