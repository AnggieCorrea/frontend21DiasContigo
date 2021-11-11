import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { ContemplationConsideration } from 'src/app/models/ContemplationConsideration';
import { SpiritualExercise } from 'src/app/models/SpiritualExercise';
import { User } from 'src/app/models/User';
import { communicationActiveUser } from 'src/app/services/communicationActiveUser.service';
import { ContemplationConsiderationService } from 'src/app/services/contemplationConsideration.service';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';
import { UserService } from 'src/app/services/user.service';
declare var $: any;
import * as RecordRTC from 'recordrtc';


@Component({
  selector: 'app-contemplation-exercise',
  templateUrl: './contemplation-exercise.component.html',
  styleUrls: ['./contemplation-exercise.component.scss'],
})
export class ContemplationExerciseComponent implements OnInit {
  faSave = faSave;
  activeUser: string;
  user: User;
  contemplation: SpiritualExercise;
  consideration: ContemplationConsideration;
  id:string;
  dayIndex:string;
  title:string;
  sentenceone:string;
  sentencetwo:string;
  urlImage:string;
  urlAudio:string;
  showSpam = false;
  showRec = false;
  showTex = false;
  showPlay = true;
  showPause = false;
  url = '';
  type: string;
  audioObj = new Audio();
  record: any;
  recording = false;
  urlRec: any;
  error: any;
  
  constructor(private domSanitizer: DomSanitizer,
    private router: Router,
    private _spiritualExerciseService: SpiritualExerciseService,
    private route: ActivatedRoute,
    private _communicationActiveUser: communicationActiveUser,
    private _userService: UserService,
    private _considerationService: ContemplationConsiderationService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this._spiritualExerciseService.getSpiritualExerciseById(this.id)
      .subscribe(
        (result)=>{
          this.contemplation = result;
          this.dayIndex = this.contemplation.dayIndex;
          this.title = this.contemplation.title;
          this.sentenceone = this.contemplation.sentenceone;
          this.sentencetwo = this.contemplation.sentencetwo;
          this.urlAudio = this.contemplation.urlAudio;
          this.urlImage = this.contemplation.urlImage;
          console.log(this.urlImage);
          console.log(this.urlAudio);
          console.log(this.contemplation);
        },
        (error) => {
          console.log(error);
        }
    )
    this.activeUser = this._communicationActiveUser.userId;
  }

  /* Functions of recorder */
  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  Recording() {
    this.recording = true;
    let mediaConstraints = {
      video: false,
      audio: true,
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
  successCallback(stream: any) {
    var options = {
      mimeType: 'audio/mpeg',
      numberOfAudioChannels: 1,
      sampleRate: 50000,
    };
    //Start Actuall Recording
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }
  Stop() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
  }
  Reset() {
    this.recording = false;
  }
  /**
   * processRecording Do what ever you want with blob
   * @param  {any} blob Blog
   */
  processRecording(blob: any) {
    this.urlRec = URL.createObjectURL(blob);
    console.log('blob', blob);
    console.log('url', this.url);
  }
  /**
   * Process Error.
   */
  errorCallback(erro: any) {
    this.error = 'Can not play audio in your browser';
  }
  /* End functions of recorder */

  showRecorder() {
    this.showRec = true;
    this.showSpam = false;
  }
  showTextArea() {
    this.showTex = true;
    this.showSpam = false;
  }
  navContemplationMap() {
    this.router.navigate(['/contemplationsMap']);
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

  saveAudioConsideration() {
    this.consideration = new ContemplationConsideration('',this.dayIndex,'audio',this.urlRec,'',this.activeUser);    
    console.log(this.consideration);
    this._considerationService.createContemplationConsideration(this.consideration).subscribe(
      (result)=>{
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );    
  }
  
  saveTextConsideration() {
    this.consideration = new ContemplationConsideration('',this.dayIndex,'text','',(document.getElementById('areaEscrita') as HTMLInputElement).value,this.activeUser); 
    console.log(this.consideration);
    this._considerationService.createContemplationConsideration(this.consideration).subscribe(
      (result)=>{
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );    
    this.navContemplationMap();
  }

}
