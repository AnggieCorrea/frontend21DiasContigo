import { Component, OnInit } from '@angular/core';
import { ContemplationConsiderationService } from 'src/app/services/contemplationConsideration.service';
import { MapService } from 'src/app/services/map.service';
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

  imageSrc="";

  constructor() /*private user: UserService,
    private contemplationMap: MapService,
    private pauseMap: MapService,
    private spiritualExercise: SpiritualExerciseService,
    private pauseConsideration: PauseConsiderationService,
    private contemplationConsideration: ContemplationConsiderationService*/
  {}

  ngOnInit(): void {
    this.imageSrc="/assets/UserIcon-Icons8.png"
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
