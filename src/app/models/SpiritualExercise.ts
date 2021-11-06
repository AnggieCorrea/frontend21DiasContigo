export interface SpiritualExercise {
  _id: string;
  type: string;
  dayIndex: string;
  title: string;
  sentenceone: string;
  sentencetwo: string;
  urlAudio: string;
  urlImage: string;
}

export class SpiritualExercise {
  _id: string;
  type: string;
  dayIndex: string;
  title: string;
  sentenceone: string;
  sentencetwo: string;
  urlAudio: string;
  urlImage: string;

  constructor(
    _id: string,
    type: string,
    dayIndex: string,
    title: string,
    sentenceone: string,
    sentencetwo: string,
    urlAudio: string,
    urlImage: string
  ) {
    this._id = _id;
    this.type = type;
    this.dayIndex = dayIndex;
    this.title = title;
    this.sentenceone = sentenceone;
    this.sentencetwo = sentencetwo;
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
    return this.dayIndex;
  }
  getTitle(): string {
    return this.title;
  }
  getSentenceOne(): string {
    return this.sentenceone;
  }
  getSentenceTwo(): string {
    return this.sentencetwo;
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
  setDayIndex(dayIndex: string): void {
    this.dayIndex = dayIndex;
  }
  setSentenceOne(sentenceone: string): void {
    this.sentenceone = sentenceone;
  }
  setSentenceTwo(sentencetwo: string): void {
    this.sentencetwo = sentencetwo;
  }
  setUrlAudio(urlAudio: string): void {
    this.urlAudio = urlAudio;
  }
  setUrlImage(urlImage: string): void {
    this.urlImage = urlImage;
  }
}
