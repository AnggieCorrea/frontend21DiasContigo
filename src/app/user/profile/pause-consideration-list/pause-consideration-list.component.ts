import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PauseConsideration } from 'src/app/models/PauseConsideration';
import { communicationActiveUser } from 'src/app/services/communicationActiveUser.service';
import { communicationConsiderationId } from 'src/app/services/communicationConsiderationId.service';
import { PauseConsiderationService } from 'src/app/services/pauseConsideration.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pause-consideration-list',
  templateUrl: './pause-consideration-list.component.html',
  styleUrls: ['./pause-consideration-list.component.scss'],
})
export class PauseConsiderationListComponent implements OnInit {
  pausas: PauseConsideration[];
  typeConsideration: string;
  activeUser: string;
  imageSrc:string;
  
  constructor(private router: Router,
    private _communicationActiveUser: communicationActiveUser,
    private _userService: UserService,
    private _pauseConsiderationService: PauseConsiderationService,
    private _communicationConsiderationId: communicationConsiderationId) {
  }

  ngOnInit(): void {
    this.activeUser = this._communicationActiveUser.userId;
    this._pauseConsiderationService.getPauseConsideration(this.activeUser).subscribe((completedExercises:PauseConsideration[]) => {
      this.pausas = completedExercises;
      for(let i = 0; i<this.pausas.length; i++){
        this.pausas[i].emoji = "/"+this.pausas[i].emoji;
      }
      console.log(this.pausas);
    });
  }

  reload():void{
    this._pauseConsiderationService.getPauseConsideration(this.activeUser).subscribe((completedExercises:PauseConsideration[]) => {
      this.pausas = completedExercises;
      for(let i = 0; i<this.pausas.length; i++){
        this.pausas[i].emoji = "/"+this.pausas[i].emoji;
      }
      console.log(this.pausas);
    });
  }
}
