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
    /* this.contemplationConsiderationList = [
      new ContemplationConsideration(
        0,
        'Reflexión de contemplación 1',
        1,
        'grabación',
        new Date('2019-03-01'),
        '',
        '',
        1
      ),
      new ContemplationConsideration(
        1,
        'Reflexión de contemplación 2',
        2,
        'texto',
        new Date('2019-03-01'),
        '',
        '',
        1
      ),
      new ContemplationConsideration(
        2,
        'Reflexión de contemplación 3',
        3,
        'grabación',
        new Date('2019-03-01'),
        '',
        '',
        1
      ),
      new ContemplationConsideration(
        3,
        'Reflexión de contemplación 4',
        4,
        'texto',
        new Date('2019-03-01'),
        '',
        '',
        1
      ),
      new ContemplationConsideration(
        4,
        'Reflexión de contemplación 5',
        5,
        'grabación',
        new Date('2019-03-01'),
        '',
        '',
        1
      ),
    ]; */
  }

  getContemplationConsideration(): Observable<ContemplationConsideration[]> {
    return this.http.get<ContemplationConsideration[]>(
      this.urlBase + '/ContemplationConsideration'
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
