import { ContemplationConsideration } from './ContemplationConsideration';
import { Map } from './Map';
import { PauseConsideration } from './PauseConsideration';

export class User {
  constructor(
    public idUser: number,
    public userName: string,
    public password: string,
    public urlPicture: string,
    public email: string,
    public role: string,
    public pauseIndex: number,
    public contemplationIndex: number,
    /*public activeTime : number,*/
    public pauseMap: Map,
    public contemplationMap: Map,
    public pauseConsiderationList: PauseConsideration[],
    public contemplationConsiderationList: ContemplationConsideration[]
  ) {}
}
