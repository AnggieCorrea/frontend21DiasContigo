import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpiritualExercise } from '../models/SpiritualExercise';

@Injectable({
  providedIn: 'root',
})
export class SpiritualExerciseService {
  urlBase = 'http://127.0.0.1:80';
  spiritualExerciseList: SpiritualExercise[] = [];

  constructor(private http: HttpClient) {}

  /*   constructor() {
    this.spiritualExerciseList = [
      //Contemplaciones
      new SpiritualExercise(
        0,
        'contemplation',
        1,
        'contemplación 1',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        '/assets/ChopinNocturne.mp3',
        'https://www.consumer.es/wp-content/uploads/2019/07/img_velas-640x480.jpg'
      ),
      new SpiritualExercise(
        1,
        'contemplation',
        2,
        'contemplación 2',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        '/assets/ChopinNocturne.mp3',
        'https://www.consumer.es/wp-content/uploads/2019/07/img_velas-640x480.jpg'
      ),
      new SpiritualExercise(
        2,
        'contemplation',
        3,
        'contemplación 3',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        '/assets/ChopinNocturne.mp3',
        'https://www.consumer.es/wp-content/uploads/2019/07/img_velas-640x480.jpg'
      ),
      new SpiritualExercise(
        3,
        'contemplation',
        4,
        'contemplación 4',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        '/assets/ChopinNocturne.mp3',
        'https://www.consumer.es/wp-content/uploads/2019/07/img_velas-640x480.jpg'
      ),
      new SpiritualExercise(
        4,
        'contemplation',
        5,
        'contemplación 5',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        '/assets/ChopinNocturne.mp3',
        'https://www.consumer.es/wp-content/uploads/2019/07/img_velas-640x480.jpg'
      ),
      /* new SpiritualExercise(5, 'contemplation', 6, '', '', '', '', ''),
      new SpiritualExercise(6, 'contemplation', 7, '', '', '', '', ''),
      new SpiritualExercise(7, 'contemplation', 8, '', '', '', '', ''),
      new SpiritualExercise(8, 'contemplation', 9, '', '', '', '', ''),
      new SpiritualExercise(9, 'contemplation', 10, '', '', '', '', ''),
      new SpiritualExercise(10, 'contemplation', 11, '', '', '', '', ''),
      new SpiritualExercise(11, 'contemplation', 12, '', '', '', '', ''),
      new SpiritualExercise(12, 'contemplation', 13, '', '', '', '', ''),
      new SpiritualExercise(13, 'contemplation', 14, '', '', '', '', ''),
      new SpiritualExercise(14, 'contemplation', 15, '', '', '', '', ''),
      new SpiritualExercise(15, 'contemplation', 16, '', '', '', '', ''),
      new SpiritualExercise(16, 'contemplation', 17, '', '', '', '', ''),
      new SpiritualExercise(17, 'contemplation', 18, '', '', '', '', ''),
      new SpiritualExercise(18, 'contemplation', 19, '', '', '', '', ''),
      new SpiritualExercise(19, 'contemplation', 20, '', '', '', '', ''),
      new SpiritualExercise(20, 'contemplation', 21, '', '', '', '', ''), 
      //Pausas
      new SpiritualExercise(
        21,
        'pause',
        1,
        'pausa 1',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        '/assets/ChopinNocturne.mp3',
        'https://www.consumer.es/wp-content/uploads/2019/07/img_velas-640x480.jpg'
      ),
      new SpiritualExercise(
        22,
        'pause',
        2,
        'pausa 2',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        '/assets/ChopinNocturne.mp3',
        'https://www.consumer.es/wp-content/uploads/2019/07/img_velas-640x480.jpg'
      ),
      new SpiritualExercise(
        23,
        'pause',
        3,
        'pausa 3',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        '/assets/ChopinNocturne.mp3',
        'https://www.consumer.es/wp-content/uploads/2019/07/img_velas-640x480.jpg'
      ),
      new SpiritualExercise(
        24,
        'pause',
        4,
        'pausa 4',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        '/assets/ChopinNocturne.mp3',
        'https://www.consumer.es/wp-content/uploads/2019/07/img_velas-640x480.jpg'
      ),
      new SpiritualExercise(
        25,
        'pause',
        5,
        'pausa 5',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        '/assets/ChopinNocturne.mp3',
        'https://www.consumer.es/wp-content/uploads/2019/07/img_velas-640x480.jpg'
      ),
      /* new SpiritualExercise(26, 'pause', 6, '', '', '', '', ''),
      new SpiritualExercise(27, 'pause', 7, '', '', '', '', ''),
      new SpiritualExercise(28, 'pause', 8, '', '', '', '', ''),
      new SpiritualExercise(29, 'pause', 9, '', '', '', '', ''),
      new SpiritualExercise(30, 'pause', 10, '', '', '', '', ''),
      new SpiritualExercise(31, 'pause', 11, '', '', '', '', ''),
      new SpiritualExercise(32, 'pause', 12, '', '', '', '', ''),
      new SpiritualExercise(33, 'pause', 13, '', '', '', '', ''),
      new SpiritualExercise(34, 'pause', 14, '', '', '', '', ''),
      new SpiritualExercise(35, 'pause', 15, '', '', '', '', ''),
      new SpiritualExercise(36, 'pause', 16, '', '', '', '', ''),
      new SpiritualExercise(37, 'pause', 17, '', '', '', '', ''),
      new SpiritualExercise(38, 'pause', 18, '', '', '', '', ''),
      new SpiritualExercise(39, 'pause', 19, '', '', '', '', ''),
      new SpiritualExercise(40, 'pause', 20, '', '', '', '', ''),
      new SpiritualExercise(41, 'pause', 21, '', '', '', '', ''), 
    ];
  } */

  //Métodos

  getSpiritualExercises(): Observable<SpiritualExercise[]> {
    return this.http.get<SpiritualExercise[]>(this.urlBase);
  }

  getSpiritualExerciseById(id: number): SpiritualExercise {
    return this.spiritualExerciseList.find(
      (spiritualExercise) => spiritualExercise.idExercise === id
    );
  }

  getSpiritualExercisesByType(type: string): SpiritualExercise[] {
    let spiritualExercises1 = [];
    for (let spiritualExercise of this.spiritualExerciseList) {
      if (spiritualExercise.type == type)
        spiritualExercises1.push(spiritualExercise);
    }
    return spiritualExercises1;
  }

  getSpiritualExercisesByUser(ids: number[]): SpiritualExercise[] {
    let spiritualExercises1 = [];
    for (let spiritualExercise of this.spiritualExerciseList) {
      for (let id of ids) {
        if (spiritualExercise.idExercise == id)
          spiritualExercises1.push(spiritualExercise);
      }
    }
    return spiritualExercises1;
  }
}
