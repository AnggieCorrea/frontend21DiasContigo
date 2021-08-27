export class ContemplationConsideration {
  constructor(
    public idContemplationConsideration: string,
    public title: string,
    public dayIndex: number,
    public type: string,
    public creationDate: Date,
    public urlConsiderationAudio: string,
    public considerationText: string
  ) {}
}
