import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { PauseConsideration } from 'src/app/models/PauseConsideration';
import { SpiritualExercise } from 'src/app/models/SpiritualExercise';
import { communicationActiveUser } from 'src/app/services/communicationActiveUser.service';
import { PauseConsiderationService } from 'src/app/services/pauseConsideration.service';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';
import { UserService } from 'src/app/services/user.service';

declare function emojis(): void;

@Component({
  selector: 'app-pause-exercise',
  templateUrl: './pause-exercise.component.html',
  styleUrls: ['./pause-exercise.component.scss'],
})

export class PauseExerciseComponent implements OnInit {
  faSave = faSave;
  activeUser: string;
  pause: SpiritualExercise;
  id:string;
  dayIndex:string;
  title:string;
  sentenceone:string;
  sentencetwo:string;
  urlImage:string;
  urlAudio:string;
  showSpam = true;
  showForm = false;
  showPlay = true;
  showPause = false;
  url = '';
  audioObj = new Audio();
  consideration :PauseConsideration;

  constructor(private router: Router,
    private _spiritualExerciseService: SpiritualExerciseService, 
    private route: ActivatedRoute,
    private _userService: UserService,
    private _considerationService: PauseConsiderationService,
    private _communicationActiveUser: communicationActiveUser
    ) {
    }

  ngOnInit(): void {
    this.activeUser = this._communicationActiveUser.userId,
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this._spiritualExerciseService.getSpiritualExerciseById(this.id)
      .subscribe(
        (result)=>{
          this.pause = result;
          this.dayIndex = this.pause.dayIndex;
          this.title = this.pause.title;
          this.sentenceone = this.pause.sentenceone;
          this.sentencetwo = this.pause.sentencetwo;
          this.urlAudio = this.pause.urlAudio;
          this.urlImage = this.pause.urlImage;
          console.log(this.urlImage);
          console.log(this.urlAudio);
          console.log(this.pause);
        },
        (error) => {
          console.log(error);
        }
    )
  }

  showFormu() {
    this.showForm = true;
    this.showSpam = false;
  }

  navPauseMap() {
    this.router.navigate(['/pauseMap']);
  }

  openFile(url: any) {
    this.audioObj.src = url;
    this.audioObj.load();
    console.log(url);
    this.showPlay = true;
    this.showPause = false;
    this.url = url;
    let player = <HTMLAudioElement>document.getElementById('audio');
    player.src = url;
    player.load();
    player.onended = (event) => {
      this.showSpam = true;
      this._userService.saveExercise(this.activeUser,this.id).subscribe(
        (result)=>{
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
    )
    };
  }

  emoji(){
    let val = <HTMLInputElement> document.getElementById("rangeInput");
    let div = <HTMLImageElement> document.querySelector('.emoji');
    let mojis = ["assets/UwUIcon.png","assets/HappyIcon.png","assets/NeutralIcon.png","assets/SadIcon.png","assets/AngryIcon.png"];
    div.src = "/"+mojis[val.value];
    console.log(this.dayIndex);
    console.log(div.src);
    console.log(this.activeUser);
  }

  savePause(){
    let val = <HTMLInputElement> document.getElementById("rangeInput");
    let div = <HTMLImageElement> document.querySelector('.emoji');
    let mojis = ["assets/UwUIcon.png","assets/HappyIcon.png","assets/NeutralIcon.png","assets/SadIcon.png","assets/AngryIcon.png"];
    div.src = "/"+mojis[val.value];
    this.consideration = new PauseConsideration('',this.dayIndex,mojis[val.value],this.activeUser); 
    console.log(this.consideration);
    this._considerationService.createPauseConsideration(this.consideration).subscribe(
      (result)=>{
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );    
  }
  
}