import { SpiritualExercise } from './SpiritualExercise';

export class Map {
  constructor(
    public idMap: number,
    public type: string,
    public exercises: SpiritualExercise[],
    public urlBackground: string
  ) {}
}
