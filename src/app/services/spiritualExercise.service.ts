import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { SpiritualExercise } from '../models/SpiritualExercise';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root',
})
export class SpiritualExerciseService {
  urlBase = 'http://127.0.0.1:80';
  spiritualExerciseList: SpiritualExercise[] = [];

  constructor(private http: HttpClient) {}

  //Métodos

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError('An error has ocurred');
  }

  getSpiritualExercises(): Observable<SpiritualExercise[]> {
    return this.http.get<SpiritualExercise[]>(this.urlBase);
  }

  /* public getSpiritualExerciseById(id: number): Observable<SpiritualExercise>{
    return this.http.get<any>(this.urlBase + `/salesReport?page=${page}&size=${size}&order=${order}`);
  }*/

  /* getSpiritualExerciseById(id: number): SpiritualExercise {
    return this.spiritualExerciseList.find(
      (spiritualExercise) => spiritualExercise.idExercise === id
    );
  } */

  getSpiritualExerciseById(id: number): Observable<SpiritualExercise> {
    return this.http.get<SpiritualExercise>(
      this.urlBase + '/SpiritualExercises/' + id
    );
  }

  getSpiritualExercisesByType(type: string): Observable<SpiritualExercise[]> {
    return this.http.get<SpiritualExercise[]>(
      `${this.urlBase}/SpiritualExercises/type=${type}`
    );
  }

  getSpiritualExerciseByDayAndType(
    day: string,
    type: string
  ): Observable<SpiritualExercise> {
    return this.http.get<SpiritualExercise>(
      `${this.urlBase}/SpiritualExercises/day=${day}&type=${type}`
    );
  }

  getSpiritualExercisesByUser(ids: string[]): SpiritualExercise[] {
    let spiritualExercises1 = [];
    /* for (let spiritualExercise of this.spiritualExerciseList) {
      for (let id of ids) {
        if (spiritualExercise.idExercise == id)
          spiritualExercises1.push(spiritualExercise);
      }
    } */
    return spiritualExercises1;
  }
}
