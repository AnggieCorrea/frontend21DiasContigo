import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpiritualExercise } from 'src/app/models/SpiritualExercise';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';

@Component({
  selector: 'app-contemplation-exercise',
  templateUrl: './contemplation-exercise.component.html',
  styleUrls: ['./contemplation-exercise.component.scss'],
})
export class ContemplationExerciseComponent implements OnInit {
  
  contemplation: SpiritualExercise;
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
  audioObj = new Audio();
  constructor(private router: Router, private _spiritualExerciseService: SpiritualExerciseService, private route: ActivatedRoute) {}

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
  }

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
    };
  }

  

}
