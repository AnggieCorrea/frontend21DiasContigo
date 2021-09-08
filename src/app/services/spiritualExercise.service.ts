import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SpiritualExercise } from '../models/SpiritualExercise';

@Injectable({
  providedIn: 'root',
})
export class SpiritualExerciseService {
  spiritualExerciseList: SpiritualExercise[];

  constructor() {
    this.spiritualExerciseList = [
      //Contemplaciones
      new SpiritualExercise(
        0,
        'contemplation',
        1,
        'contemplación 1',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
      ),
      new SpiritualExercise(
        1,
        'contemplation',
        2,
        'contemplación 2',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
      ),
      new SpiritualExercise(
        2,
        'contemplation',
        3,
        'contemplación 3',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
      ),
      new SpiritualExercise(
        3,
        'contemplation',
        4,
        'contemplación 4',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
      ),
      new SpiritualExercise(
        4,
        'contemplation',
        5,
        'contemplación 5',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
      ),
      //Pausas
      new SpiritualExercise(
        5,
        'pause',
        1,
        'pausa 1',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
      ),
      new SpiritualExercise(
        6,
        'pause',
        2,
        'pausa 2',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
      ),
      new SpiritualExercise(
        7,
        'pause',
        3,
        'pausa 3',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
      ),
      new SpiritualExercise(
        8,
        'pause',
        4,
        'pausa 4',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
      ),
      new SpiritualExercise(
        9,
        'pause',
        5,
        'pausa 5',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
      ),
    ];
  }

  //Métodos

  getSpiritualExercises(): SpiritualExercise[] {
    return this.spiritualExerciseList;
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
}
