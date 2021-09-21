import { ContemplationConsideration } from './ContemplationConsideration';
import { Map } from './Map';
import { PauseConsideration } from './PauseConsideration';

export interface UserInterface {
  idUser: number;
  userName: string;
  password: string;
  email: string;
  role: string;
  listIdsCompletedExercises: number[];
  listIdsMissingExercises: number[];
}

export class User implements UserInterface {
  idUser: number;
  userName: string;
  password: string;
  email: string;
  role: string;
  listIdsCompletedExercises: number[];
  listIdsMissingExercises: number[];

  constructor(
    idUser: number,
    userName: string,
    password: string,
    /*public urlPicture: string,*/
    email: string,
    role: string,
    /*public activeTime : number,*/
    listIdsCompletedExercises: number[],
    listIdsMissingExercises: number[]
    /*public pauseConsiderationList: PauseConsideration[],
    public contemplationConsiderationList: ContemplationConsideration[]*/
  ) {
    this.idUser = idUser;
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.role = role;
    this.listIdsCompletedExercises = listIdsCompletedExercises;
    this.listIdsMissingExercises = listIdsMissingExercises;
  }

  //gets
  getIdUser(): number {
    return this.idUser;
  }
  getUserName(): string {
    return this.userName;
  }
  /* getPassword(): string {
    return this.password;
  } */
  getEmail(): string {
    return this.email;
  }
  getRole(): string {
    return this.role;
  }
  getListIdsCompletedExercises(): number[] {
    return this.listIdsCompletedExercises;
  }
  getListIdsMissingExercises(): number[] {
    return this.listIdsMissingExercises;
  }

  //sets
  /* setIdUser(idUser: number) {
    this.idUser = idUser;
  } */
  setUserName(userName: string) {
    this.userName = userName;
  }
  setPassword(password: string) {
    this.password = password;
  }
  setEmail(email: string) {
    this.email = email;
  }
  setRole(role: string) {
    this.role = role;
  }
  setListIdsCompletedExercises(listIdsCompletedExercises: number[]) {
    this.listIdsCompletedExercises = listIdsCompletedExercises;
  }
  setListIdsMissingExercises(listIdsMissingExercises: number[]) {
    this.listIdsMissingExercises = listIdsMissingExercises;
  }
}
