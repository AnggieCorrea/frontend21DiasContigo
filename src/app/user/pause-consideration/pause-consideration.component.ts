import { Component, OnInit } from '@angular/core';
import { PauseConsiderationService } from 'src/app/services/pauseConsideration.service';

@Component({
  selector: 'app-pause-consideration',
  templateUrl: './pause-consideration.component.html',
  styleUrls: ['./pause-consideration.component.scss'],
})
export class PauseConsiderationComponent implements OnInit {
  constructor(/*private pauseConsideration: PauseConsiderationService*/) {}

  ngOnInit(): void {}
}
