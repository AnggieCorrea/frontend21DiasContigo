import { Component, OnInit, Output } from '@angular/core';
import { ContemplationConsiderationService } from 'src/app/services/contemplationConsideration.service';
import { EventEmitter } from '@angular/core';
import { CommunicationTypeOfConsiderationContemService } from 'src/app/services/communication-type-of-consideration-contem.service';

@Component({
  selector: 'app-contemplation-consideration',
  templateUrl: './contemplation-consideration.component.html',
  styleUrls: ['./contemplation-consideration.component.scss'],
})
export class ContemplationConsiderationComponent implements OnInit {
  public showRecorder: boolean = false;
  public showTextArea: boolean = false;
  showPlay = true;
  showPause = false;
  url = '/assets/ChopinNocturne.mp3';
  typeConsideration:string;

  audioObj = new Audio();
  @Output() valueResponse: EventEmitter<Boolean> = new EventEmitter();
  
  constructor(private communicationServiceConsideration: CommunicationTypeOfConsiderationContemService) /*private contemplationConsideration: ContemplationConsiderationService
   */ {
   }

  ngOnInit(): void {
    this.typeConsideration=this.communicationServiceConsideration.typeConsideration;
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
  }

}
