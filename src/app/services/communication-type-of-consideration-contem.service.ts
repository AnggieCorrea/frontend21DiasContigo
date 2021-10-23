import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationTypeOfConsiderationContemService {
  typeConsideration: string;
  private sendTypeConsiderationBehaviorSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('vacio');

  constructor() {}

  //Observables
  sendTypeConsiderationObservable: Observable<string> =
    this.sendTypeConsiderationBehaviorSubject.asObservable();

  //Métodos

  setTypeConsideration(type: string): void {
    this.typeConsideration = type;
    this.sendTypeConsiderationBehaviorSubject.next(type);
  }
}
