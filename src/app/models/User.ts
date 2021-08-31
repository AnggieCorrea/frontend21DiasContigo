import { ContemplationConsideration } from './ContemplationConsideration';
import { Map } from './Map';
import { PauseConsideration } from './PauseConsideration';

export interface UserInterface {
  idUser: number;
  userName: string;
  password: string;
  email: string;
  role: string;
  pauseIndex: number;
  contemplationIndex: number;
}

export class User implements UserInterface {
  idUser: number;
  userName: string;
  password: string;
  email: string;
  role: string;
  pauseIndex: number;
  contemplationIndex: number;

  constructor(
    idUser: number,
    userName: string,
    password: string,
    /*public urlPicture: string,*/
    email: string,
    role: string,
    pauseIndex: number,
    contemplationIndex: number
    /*public activeTime : number,*/
    /*public pauseMap: Map,
    public contemplationMap: Map,
    public pauseConsiderationList: PauseConsideration[],
    public contemplationConsiderationList: ContemplationConsideration[]*/
  ) {
    this.idUser = idUser;
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.role = role;
    this.pauseIndex = pauseIndex;
    this.contemplationIndex = contemplationIndex;
  }
}
