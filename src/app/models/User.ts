import { ContemplationConsideration } from './ContemplationConsideration';
import { PauseConsideration } from './PauseConsideration';

export interface UserInterface {
  idUser: number;
  name: string;
  lastName: string;
  email: string;
  gender: string;
  city: string;
  country: string;
  password: string;
  urlImage: string;
  role: string;
  listIdsCompletedPauses: number[];
  listIdsCompletedContemplations: number[];
  pauseConsiderationList: PauseConsideration[];
  contemplationConsiderationList: ContemplationConsideration[];
}

export class User implements UserInterface {
  idUser: number;
  name: string;
  lastName: string;
  email: string;
  gender: string;
  city: string;
  country: string;
  password: string;
  urlImage: string;
  role: string;
  listIdsCompletedPauses: number[];
  listIdsCompletedContemplations: number[];
  pauseConsiderationList: PauseConsideration[];
  contemplationConsiderationList: ContemplationConsideration[];

  constructor(
    name: string,
    lastName: string,
    password: string,
    gender: string,
    country: string,
    city: string,
    email: string,
    role: string,
    urlImage: string,
    listIdsCompletedPauses: number[],
    listIdsCompletedContemplations: number[],
    pauseConsiderationList: PauseConsideration[],
    contemplationConsiderationList: ContemplationConsideration[]
  ) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.city = city;
    this.country = country;
    this.password = password;
    this.role = role;
    this.urlImage = urlImage;
    this.listIdsCompletedPauses= listIdsCompletedPauses;
    this.listIdsCompletedContemplations= listIdsCompletedContemplations;
    this.pauseConsiderationList = pauseConsiderationList;
    this.contemplationConsiderationList = contemplationConsiderationList;
  }

  //gets
  getIdUser(): number {
    return this.idUser;
  }
  getName(): string {
    return this.name;
  }
  getLastName(): string {
    return this.name;
  }
  getEmail(): string {
    return this.email;
  }
  getGender(): string {
    return this.gender;
  }
  getCity(): string {
    return this.city;
  }
  getCountry(): string {
    return this.country;
  }
  getPassword(): string {
    return this.password;
  }
  getRole(): string {
    return this.role;
  }
  getUrlImage(): string {
    return this.urlImage;
  }
  getListIdsCompletedPauses(): number[] {
    return this.listIdsCompletedPauses;
  }
  getListIdsCompletedContemplations(): number[] {
    return this.listIdsCompletedContemplations;
  }
  getPauseConsiderationList(): PauseConsideration[] {
    return this.pauseConsiderationList;
  }
  getContemplationConsiderationList(): ContemplationConsideration[] {
    return this.contemplationConsiderationList;
  }

  //sets
  setName(name: string): void {
    this.name = name;
  }
  setLastName(lastName: string): void {
    this.lastName = lastName;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  setGender(gender: string): void {
    this.gender = gender;
  }
  setCity(city: string): void {
    this.city = city;
  }
  setCountry(country: string): void {
    this.country = country;
  }
  setPassword(password: string): void {
    this.password = password;
  }
  setRole(role: string): void {
    this.role = role;
  }
  setUrlImage(urlImage: string): void {
    this.urlImage = urlImage;
  }
  setListIdsCompletedPauses(listIdsCompletedExercises: number[]): void {
    this.listIdsCompletedPauses = listIdsCompletedExercises;
  }
  setListIdsCompletedContemplations(listIdsCompletedExercises: number[]): void {
    this.listIdsCompletedContemplations = listIdsCompletedExercises;
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
