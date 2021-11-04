import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class communicationActiveUser {
  userId: string;
  private sendUserIdBehaviorSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('vacio');

  constructor() {}

  //Observables
  sendUserIdObservable: Observable<string> =
    this.sendUserIdBehaviorSubject.asObservable();

  //Métodos

  setUserId(userId: string): void {
    this.userId = userId;
    this.sendUserIdBehaviorSubject.next(userId);
  }
}