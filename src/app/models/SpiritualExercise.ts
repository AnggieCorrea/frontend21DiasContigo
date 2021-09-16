export interface SpiritualExercise {
  idExercise: number;
  type: string;
  dayIndex: number;
  title: string;
  sentence1: string;
  sentence2: string;
  urlAudio: string;
  urlImage: string;
}

export class SpiritualExercise {
  idExercise: number;
  type: string;
  dayIndex: number;
  title: string;
  sentence1: string;
  sentence2: string;
  urlAudio: string;
  urlImage: string;

  constructor(
    idExercise: number,
    type: string,
    dayIndex: number,
    title: string,
    sentence1: string,
    sentence2: string,
    /*public numLike: number,*/
    urlAudio: string,
    urlImage: string
    /*public visible : boolean*/
  ) {
    this.idExercise = idExercise;
    this.type = type;
    this.dayIndex = dayIndex;
    this.title = title;
    this.sentence1 = sentence1;
    this.sentence2 = sentence2;
    this.urlAudio = urlAudio;
    this.urlImage = urlImage;
  }
}
