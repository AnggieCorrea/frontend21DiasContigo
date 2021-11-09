import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContemplationConsideration } from '../models/ContemplationConsideration';

@Injectable({
  providedIn: 'root',
})
export class ContemplationConsiderationService {

  urlBase = 'http://127.0.0.1:90';

  
  /* contemplationConsiderationList: ContemplationConsideration[]; */

  constructor(private http:HttpClient) {
  }

  getContemplationConsideration(userId: string): Observable<ContemplationConsideration[]> {
    return this.http.get<ContemplationConsideration[]>(
      `${this.urlBase}/ContemplationConsideration/idUser=${userId}`
    );
  }

  getContemplationConsiderationById(contemplationId: string): Observable<ContemplationConsideration> {
    return this.http.get<ContemplationConsideration>(
      `${this.urlBase}/ContemplationConsideration/contemplationId=${contemplationId}`
    );
  }

  createContemplationConsideration(contemplation: ContemplationConsideration): Observable<ContemplationConsideration>{
    if(contemplation.type == 'text'){
      return this.http.post<ContemplationConsideration>(
        `${this.urlBase}/ContemplationConsideration/text`,contemplation 
      );
    }else{
      return this.http.post<ContemplationConsideration>(
        `${this.urlBase}/ContemplationConsideration/audio`,contemplation
      );
    }
  }
}
