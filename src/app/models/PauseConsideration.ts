export interface PauseConsiderationInterface {
  _id: string;
  dayIndex: string;
  type: string;
  urlConsiderationAudio: string;
  considerationText: string;
  idUser: string;
}

export class PauseConsideration
  implements PauseConsiderationInterface
{
  _id: string;
  dayIndex: string;
  type: string;
  urlConsiderationAudio: string;
  considerationText: string;
  idUser: string;

  constructor(
    _id: string,
    dayIndex: string,
    type: string,
    urlConsiderationAudio: string,
    considerationText: string,
    idUser: string
  ) {
    this._id = _id;
    this.dayIndex = dayIndex;
    this.type = type;
    this.urlConsiderationAudio = urlConsiderationAudio;
    this.considerationText = considerationText;
    this.idUser = idUser;
  }

  //gets
  getId(): string {
    return this._id;
  }
  getDayIndex(): string {
    return this.dayIndex;
  }
  getType(): string {
    return this.type;
  }
  getUrlConsiderationAudio(): string {
    return this.urlConsiderationAudio;
  }
  getConsiderationText(): string {
    return this.considerationText;
  }
  getIdUser(): string {
    return this.idUser;
  }

  //sets
  /* setIdContemplationConsideration(idContemplationConsideration: number): void {
    this.idContemplationConsideration = idContemplationConsideration;
  } */
  setDayIndex(dayIndex: string): void {
    this.dayIndex = dayIndex;
  }
  setType(type: string): void {
    this.type = type;
  }
  setUrlConsiderationAudio(urlConsiderationAudio: string): void {
    this.urlConsiderationAudio = urlConsiderationAudio;
  }
  setConsiderationText(considerationText: string): void {
    this.considerationText = considerationText;
  }
  setIdUser(idUser: string): void {
    this.idUser = idUser;
  }
}