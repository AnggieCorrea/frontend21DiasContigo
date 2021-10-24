export interface ContemplationConsiderationInterface {
  idContemplationConsideration: number;
  title: string;
  dayIndex: number;
  type: string;
  creationDate: Date;
  urlConsiderationAudio: string;
  considerationText: string;
  idUser: number;
}

export class ContemplationConsideration
  implements ContemplationConsiderationInterface
{
  idContemplationConsideration: number;
  title: string;
  dayIndex: number;
  type: string;
  creationDate: Date;
  urlConsiderationAudio: string;
  considerationText: string;
  idUser: number;

  constructor(
    idContemplationConsideration: number,
    title: string,
    dayIndex: number,
    type: string,
    creationDate: Date,
    urlConsiderationAudio: string,
    considerationText: string,
    idUser: number
  ) {
    this.idContemplationConsideration = idContemplationConsideration;
    this.title = title;
    this.dayIndex = dayIndex;
    this.type = type;
    this.creationDate = creationDate;
    this.urlConsiderationAudio = urlConsiderationAudio;
    this.considerationText = considerationText;
    this.idUser = idUser;
  }

  //gets
  getIdContemplationConsideration(): number {
    return this.idContemplationConsideration;
  }
  getTitle(): string {
    return this.title;
  }
  getDayIndex(): number {
    return this.dayIndex;
  }
  getType(): string {
    return this.type;
  }
  getCreationDate(): Date {
    return this.creationDate;
  }
  getUrlConsiderationAudio(): string {
    return this.urlConsiderationAudio;
  }
  getConsiderationText(): string {
    return this.considerationText;
  }
  getIdUser(): number {
    return this.idUser;
  }

  //sets
  /* setIdContemplationConsideration(idContemplationConsideration: number): void {
    this.idContemplationConsideration = idContemplationConsideration;
  } */
  setTitle(title: string): void {
    this.title = title;
  }
  setDayIndex(dayIndex: number): void {
    this.dayIndex = dayIndex;
  }
  setType(type: string): void {
    this.type = type;
  }
  setCreationDate(creationDate: Date): void {
    this.creationDate = creationDate;
  }
  setUrlConsiderationAudio(urlConsiderationAudio: string): void {
    this.urlConsiderationAudio = urlConsiderationAudio;
  }
  setConsiderationText(considerationText: string): void {
    this.considerationText = considerationText;
  }
  setIdUser(idUser: number): void {
    this.idUser = idUser;
  }
}
