import { Component, OnInit, Output } from '@angular/core';
import { ContemplationConsiderationService } from 'src/app/services/contemplationConsideration.service';
import { EventEmitter } from '@angular/core';
import { CommunicationTypeOfConsiderationContemService } from 'src/app/services/communication-type-of-consideration-contem.service';
import { ContemplationConsideration } from 'src/app/models/ContemplationConsideration';
import { communicationConsiderationId } from 'src/app/services/communicationConsiderationId.service';

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
  url:string = "";
  consideration:ContemplationConsideration;
  considerationId:string;
  type: string;
  dayIndex:string;
  textArea:string;

  audioObj = new Audio();
  @Output() valueResponse: EventEmitter<Boolean> = new EventEmitter();
  
  constructor(private _communicationServiceConsideration: ContemplationConsiderationService,
    private _communicationConsiderationId: communicationConsiderationId) /*private contemplationConsideration: ContemplationConsiderationService
   */ {
   }

  ngOnInit(): void {
    this.considerationId = this._communicationConsiderationId.considerationId 
    this._communicationServiceConsideration.getContemplationConsiderationById(this.considerationId)
      .subscribe((considerationFound: ContemplationConsideration) => {
      this.consideration = considerationFound;
      console.log(this.consideration);
      this.dayIndex = this.consideration.dayIndex
      this.type = this.consideration.type
      if (this.consideration.urlConsiderationAudio != "") {
        this.url = this.consideration.urlConsiderationAudio;    
      }
      if(this.consideration.considerationText != ""){
        this.textArea = this.consideration.considerationText
      }
    });
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
