import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PauseConsideration } from '../models/PauseConsideration';

@Injectable({
  providedIn: 'root',
})
export class PauseConsiderationService {

  urlBase = 'http://127.0.0.1:90';

  
  /* PauseConsiderationList: PauseConsideration[]; */

  constructor(private http:HttpClient) {
  }

  getPauseConsideration(userId: string): Observable<PauseConsideration[]> {
    return this.http.get<PauseConsideration[]>(
      `${this.urlBase}/PauseConsideration/idUser=${userId}`
    );
  }

  getPauseConsiderationById(contemplationId: string): Observable<PauseConsideration> {
    return this.http.get<PauseConsideration>(
      `${this.urlBase}/PauseConsideration/contemplationId=${contemplationId}`
    );
  }

  createPauseConsideration(contemplation: PauseConsideration): Observable<PauseConsideration>{
    return this.http.post<PauseConsideration>(
        `${this.urlBase}/PauseConsideration`,contemplation 
      );
  }
}
