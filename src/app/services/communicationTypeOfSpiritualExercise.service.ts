import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class communicationTypeOfSpiritualExercise {
  typeExercise: string;
  private sendTypeExerciseBehaviorSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('vacio');

  constructor() {}

  //Observables
  sendTypeExerciseObservable: Observable<string> =
    this.sendTypeExerciseBehaviorSubject.asObservable();

  //Métodos

  setTypeExercise(type: string): void {
    this.typeExercise = type;
    this.sendTypeExerciseBehaviorSubject.next(type);
  }
}
