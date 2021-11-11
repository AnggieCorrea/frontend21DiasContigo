import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContemplationConsideration } from 'src/app/models/ContemplationConsideration';
import { CommunicationTypeOfConsiderationContemService } from 'src/app/services/communication-type-of-consideration-contem.service';
import { communicationActiveUser } from 'src/app/services/communicationActiveUser.service';
import { communicationConsiderationId } from 'src/app/services/communicationConsiderationId.service';
import { ContemplationConsiderationService } from 'src/app/services/contemplationConsideration.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contemplation-consideration-list',
  templateUrl: './contemplation-consideration-list.component.html',
  styleUrls: ['./contemplation-consideration-list.component.scss'],
})
export class ContemplationConsiderationListComponent implements OnInit {
  /* */
  contemplaciones: ContemplationConsideration[];
  typeConsideration: string;
  activeUser: string;
  imageSrc:string;
  constructor(private router: Router,
    private _communicationActiveUser: communicationActiveUser,
    private _userService: UserService,
    private _contemplationConsiderationService: ContemplationConsiderationService,
    private _communicationConsiderationId: communicationConsiderationId) {
  }

  ngOnInit(): void {
    this.activeUser = this._communicationActiveUser.userId;
    this._contemplationConsiderationService.getContemplationConsideration(this.activeUser).subscribe((completedExercises:ContemplationConsideration[]) => {
      this.contemplaciones = completedExercises;
      console.log(this.contemplaciones);
    });
  }

  myConsideration(considerationId:string):void{
    this._communicationConsiderationId.setconsiderationId(considerationId);
    this.router.navigate(['/contemplationConsideration/'+considerationId]);
  }

}
