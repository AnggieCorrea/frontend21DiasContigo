export interface SpiritualExercise {
  idExercise: number;
  type: string;
  dayIndex: number;
  title: string;
  sentenceOne: string;
  sentenceTwo: string;
  urlAudio: string;
  urlImage: string;
}

export class SpiritualExercise {
  idExercise: number;
  type: string;
  dayIndex: number;
  title: string;
  sentenceOne: string;
  sentenceTwo: string;
  urlAudio: string;
  urlImage: string;

  constructor(
    idExercise: number,
    type: string,
    dayIndex: number,
    title: string,
    sentenceOne: string,
    sentenceTwo: string,
    urlAudio: string,
    urlImage: string
  ) {
    this.idExercise = idExercise;
    this.type = type;
    this.dayIndex = dayIndex;
    this.title = title;
    this.sentenceOne = sentenceOne;
    this.sentenceTwo = sentenceTwo;
    this.urlAudio = urlAudio;
    this.urlImage = urlImage;
  }

  //gets
  getIdExercise(): number {
    return this.idExercise;
  }
  getType(): string {
    return this.type;
  }
  getDayIndex(): number {
    return this.dayIndex;
  }
  getTitle(): string {
    return this.title;
  }
  getSentenceOne(): string {
    return this.sentenceOne;
  }
  getSentenceTwo(): string {
    return this.sentenceTwo;
  }
  getUrlAudio(): string {
    return this.urlAudio;
  }
  getUrlImage(): string {
    return this.urlImage;
  }

  //sets
  setType(type: string): void {
    this.type = type;
  }
  setDayIndex(dayIndex: number): void {
    this.dayIndex = dayIndex;
  }
  setSentenceOne(sentenceOne: string): void {
    this.sentenceOne = sentenceOne;
  }
  setSentenceTwo(sentenceTwo: string): void {
    this.sentenceTwo = sentenceTwo;
  }
  setUrlAudio(urlAudio: string): void {
    this.urlAudio = urlAudio;
  }
  setUrlImage(urlImage: string): void {
    this.urlImage = urlImage;
  }
}
