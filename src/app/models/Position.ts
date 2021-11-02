export interface Position {
    name: string;
    completed: string;
    disable: string;
    even: string;
    column: string;
}
  
export class Position {
    name: string;
    completed: string;
    disable: string;
    even: string;
    column: string;

    constructor(
      name: string,
      completed: string,
      disable: string,
      even: string,
      column: string,
    ) {
      this.name = name;
      this.completed = completed;
      this.disable = disable;
      this.even = even;
      this.column = column;
    }
  
    //gets
    getName(): string {
      return this.name;
    }
    getCompleted(): string {
      return this.completed;
    }
    getDisable(): string {
      return this.disable;
    }
    getEven(): string {
      return this.even;
    }
    getColumn(): string {
      return this.column;
    }
    //sets
    setName(name: string): void {
      this.name = name;
    }
    setCompleted(completed: string): void {
      this.completed = completed;
    }
    setDisable(disable: string): void {
      this.disable = disable;
    }
    setEven(even: string): void {
      this.even = even;
    }
    setColumn(column: string): void {
      this.column = column;
    }
  }
  