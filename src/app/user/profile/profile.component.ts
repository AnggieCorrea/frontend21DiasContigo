import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { communicationActiveUser } from 'src/app/services/communicationActiveUser.service';
import { ContemplationConsiderationService } from 'src/app/services/contemplationConsideration.service';
import { PauseConsiderationService } from 'src/app/services/pauseConsideration.service';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  showContemplation = true;
  showPause = false;
  showAvatars = false;
  activeUser: string;
  imageSrc:string;
  userFound: User;
  userF: User;

  constructor(private router: Router,
    private _spiritualExerciseService: SpiritualExerciseService, 
    private route: ActivatedRoute,
    private _userService: UserService,    
    private _communicationActiveUser: communicationActiveUser)
  {
  }

  ngOnInit(): void {
    this.activeUser = this._communicationActiveUser.userId;
    this._userService.getUserById(this.activeUser).subscribe((userFound: User) => {
      this.userF = userFound;
      console.log(this.userF);
      if (this.userF.urlImage != "") {
        this.imageSrc = this.userF.urlImage;    
      }else{
        this.imageSrc = "/assets/UserIcon-Icons8.png"
      }
    });
  }

  showContemplations() {
    this.showContemplation = true;
    this.showPause = false;
  }

  showPauses() {
    this.showContemplation = false;
    this.showPause = true;
  }

  snapshot() {
    this.showAvatars = true;
  }

  changeAvatar1(){
    this.imageSrc="/assets/GirlAvatar1.png"
    this.showAvatars = false;
  }
  changeAvatar2(){
    this.imageSrc="/assets/GirlAvatar2.png"
    this.showAvatars = false;
  }
  changeAvatar3(){
    this.imageSrc="/assets/BoyAvatar1.png"
    this.showAvatars = false;
  }
  changeAvatar4(){
    this.imageSrc="/assets/BoyAvatar2.png"
    this.showAvatars = false;
  }
}
