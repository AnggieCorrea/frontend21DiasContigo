export interface SpiritualExercise {
  idExercise: number;
  type: string;
  dayIndex: number;
  title: string;
  sentenceone: string;
  sentencetwo: string;
  urlAudio: string;
  urlImage: string;
}

export class SpiritualExercise {
  idExercise: number;
  type: string;
  dayIndex: number;
  title: string;
  sentenceone: string;
  sentencetwo: string;
  urlAudio: string;
  urlImage: string;

  constructor(
    idExercise: number,
    type: string,
    dayIndex: number,
    title: string,
    sentenceone: string,
    sentencetwo: string,
    /*public numLike: number,*/
    urlAudio: string,
    urlImage: string
    /*public visible : boolean*/
  ) {
    this.idExercise = idExercise;
    this.type = type;
    this.dayIndex = dayIndex;
    this.title = title;
    this.sentenceone = sentenceone;
    this.sentencetwo = sentencetwo;
    this.urlAudio = urlAudio;
    this.urlImage = urlImage;
  }
}
