export interface SpiritualExercise {
  _id: string;
  type: string;
  day: string;
  title: string;
  sentenceOne: string;
  sentenceTwo: string;
  urlAudio: string;
  urlImage: string;
}

export class SpiritualExercise {
  _id: string;
  type: string;
  day: string;
  title: string;
  sentenceOne: string;
  sentenceTwo: string;
  urlAudio: string;
  urlImage: string;

  constructor(
    _id: string,
    type: string,
    day: string,
    title: string,
    sentenceOne: string,
    sentenceTwo: string,
    urlAudio: string,
    urlImage: string
  ) {
    this._id = _id;
    this.type = type;
    this.day = day;
    this.title = title;
    this.sentenceOne = sentenceOne;
    this.sentenceTwo = sentenceTwo;
    this.urlAudio = urlAudio;
    this.urlImage = urlImage;
  }

  //gets
  getIdExercise(): string {
    return this._id;
  }
  getType(): string {
    return this.type;
  }
  getDay(): string {
    return this.day;
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
  setDayIndex(day: string): void {
    this.day = day;
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
