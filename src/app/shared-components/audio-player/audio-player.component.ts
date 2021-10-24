import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
  url = '';

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
