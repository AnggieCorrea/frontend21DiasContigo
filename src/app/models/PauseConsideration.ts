export class PauseConsideration {
  constructor(
    public idPauseConsideration: number,
    public title: string,
    public dayIndex: number,
    public creationDate: Date,
    public emotion: string,
    public urlBackground: string,
    public urlEmoticons: string[]
  ) {}
}
