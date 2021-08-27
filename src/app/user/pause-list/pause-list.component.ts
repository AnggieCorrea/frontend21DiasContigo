import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-pause-list',
  templateUrl: './pause-list.component.html',
  styleUrls: ['./pause-list.component.scss'],
})
export class PauseListComponent implements OnInit {
  constructor(/*private pauseMap: MapService*/) {}

  ngOnInit(): void {}

  navSpiritualExcercise(dia: string) {}
}
