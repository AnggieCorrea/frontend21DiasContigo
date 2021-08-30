import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showPlay = true;
  showPause = false;
  showSpam = true;
  audioObj = new Audio();
  @Output() valueResponse: EventEmitter<boolean> = new EventEmitter();
  files = [
    {
      url: '/assets/ChopinNocturne.mp3',
      name: 'First song',
    },
    {
      url: '/assets/PachelbelCanon.mp3',
      name: 'Second song',
    },
  ];
  title = 'AudioApp';
  openFile(url: any) {
    this.audioObj.src = url;
    this.audioObj.load();
    console.log(url);
    this.showPlay = true;
    this.showPause = false;
  }
  setVolume(ev: any) {
    this.audioObj.volume = ev.target.value;
    console.log(ev.target.value);
  }

  play() {
    this.audioObj.play();
    console.log('Clicked play');
    this.showPlay = false;
    this.showPause = true;
    this.audioObj.onended = (event) => {
      this.showSpam = true;
      this.audioObj.pause();
      this.audioObj.currentTime = 0;
      this.showPlay = true;
      this.showPause = false;
    };
  }
  pause() {
    this.audioObj.pause();
    console.log('Clicked pause');
    this.showPlay = true;
    this.showPause = false;
  }
  stop() {
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
    console.log('Clicked stop');
    this.showPlay = true;
    this.showPause = false;
  }
}
