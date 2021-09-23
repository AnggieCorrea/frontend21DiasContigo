import { ContemplationConsideration } from './ContemplationConsideration';
import { PauseConsideration } from './PauseConsideration';

export interface UserInterface {
  idUser: number;
  userName: string;
  password: string;
  email: string;
  role: string;
  listIdsCompletedExercises: number[];
}

export class User implements UserInterface {
  idUser: number;
  userName: string;
  password: string;
  email: string;
  role: string;
  listIdsCompletedExercises: number[];
  pauseConsiderationList: PauseConsideration[];
  contemplationConsiderationList: ContemplationConsideration[];

  constructor(
    idUser: number,
    userName: string,
    password: string,
    /*public urlPicture: string,*/
    email: string,
    role: string,
    /*public activeTime : number,*/
    listIdsCompletedExercises: number[],
    pauseConsiderationList: PauseConsideration[],
    contemplationConsiderationList: ContemplationConsideration[]
  ) {
    this.idUser = idUser;
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.role = role;
    this.listIdsCompletedExercises = listIdsCompletedExercises;
    this.pauseConsiderationList = pauseConsiderationList;
    this.contemplationConsiderationList = contemplationConsiderationList;
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
  getPauseConsiderationList(): PauseConsideration[] {
    return this.pauseConsiderationList;
  }
  getContemplationConsiderationList(): ContemplationConsideration[] {
    return this.contemplationConsiderationList;
  }

  //sets
  /* setIdUser(idUser: number) {
    this.idUser = idUser;
  } */
  setUserName(userName: string): void {
    this.userName = userName;
  }
  setPassword(password: string): void {
    this.password = password;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  setRole(role: string): void {
    this.role = role;
  }
  setListIdsCompletedExercises(listIdsCompletedExercises: number[]): void {
    this.listIdsCompletedExercises = listIdsCompletedExercises;
  }
  setPauseConsiderationList(
    pauseConsiderationList: PauseConsideration[]
  ): void {
    this.pauseConsiderationList = pauseConsiderationList;
  }
  setContemplationConsiderationList(
    contemplationConsiderationList: ContemplationConsideration[]
  ): void {
    this.contemplationConsiderationList = contemplationConsiderationList;
  }
}
