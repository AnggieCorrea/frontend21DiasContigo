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

  getSpiritualExercises(): Observable<SpiritualExercise[]> {
    return this.http.get<SpiritualExercise[]>(this.urlBase);
  }

  getSpiritualExerciseById(id: string): Observable<SpiritualExercise> {
    return this.http.get<SpiritualExercise>(
      `${this.urlBase}/SpiritualExercises/${id}`
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

  updateSpiritualExercise(
    spiritualExercise: SpiritualExercise
  ): Observable<SpiritualExercise> {
    return this.http.put<SpiritualExercise>(
      this.urlBase + '' + spiritualExercise._id,
      spiritualExercise
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
