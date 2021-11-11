export interface PauseConsiderationInterface {
  _id: string;
  dayIndex: string;
  emoji: string;
  idUser: string;
}

export class PauseConsideration
  implements PauseConsiderationInterface
{
  _id: string;
  dayIndex: string;
  emoji: string;
  idUser: string;

  constructor(
    _id: string,
    dayIndex: string,
    emoji: string,
    idUser: string
  ) {
    this._id = _id;
    this.dayIndex = dayIndex;
    this.emoji = emoji;
    this.idUser = idUser;
  }

  //gets
  getId(): string {
    return this._id;
  }
  getDayIndex(): string {
    return this.dayIndex;
  }
  getemoji(): string {
    return this.emoji;
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
  setUrlConsiderationAudio(emoji: string): void {
    this.emoji = emoji;
  }
  setIdUser(idUser: string): void {
    this.idUser = idUser;
  }
}