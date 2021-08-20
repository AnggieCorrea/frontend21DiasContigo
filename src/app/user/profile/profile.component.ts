import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  showContemplation=true;
  showPause=false;

  constructor() {
   }

  ngOnInit(): void {
  }

  showContemplations(){
    this.showContemplation = true;
    this.showPause = false;
  }

  showPauses(){
    this.showContemplation = false;
    this.showPause = true;
  }

}
