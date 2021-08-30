import { Component, OnInit } from '@angular/core';
import { ContemplationConsiderationService } from 'src/app/services/contemplationConsideration.service';

@Component({
  selector: 'app-contemplation-consideration',
  templateUrl: './contemplation-consideration.component.html',
  styleUrls: ['./contemplation-consideration.component.scss'],
})
export class ContemplationConsiderationComponent implements OnInit {
  public showRecorder: boolean = false;
  public showTextArea: boolean = false;

  constructor() /*private contemplationConsideration: ContemplationConsiderationService
   */ {}

  ngOnInit(): void {}
}
