import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class communicationConsiderationId {
  considerationId: string;
  private sendConsiderationIdBehaviorSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('vacio');

  constructor() {}

  //Observables
  sendConsiderationIdObservable: Observable<string> =
    this.sendConsiderationIdBehaviorSubject.asObservable();

  //Métodos

  setconsiderationId(considerationId: string): void {
    this.considerationId = considerationId;
    this.sendConsiderationIdBehaviorSubject.next(considerationId);
  }
}