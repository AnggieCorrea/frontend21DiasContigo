export class SpiritualExercise {
  constructor(
    public idExercise: number,
    public type: string,
    public dayIndex: number,
    public title: string,
    public sentence1: string,
    public sentence2: string,
    /*public numLike: number,*/
    public urlAudio: string,
    public urlImage: string /*public visible : boolean*/
  ) {}
}
