import { Component, OnInit } from '@angular/core';
import { ContemplationConsiderationService } from 'src/app/services/contemplationConsideration.service';
import { MapService } from 'src/app/services/map.service';
import { PauseConsiderationService } from 'src/app/services/pauseConsideration.service';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  showContemplation = true;
  showPause = false;

  constructor() /*private user: UserService,
    private contemplationMap: MapService,
    private pauseMap: MapService,
    private spiritualExercise: SpiritualExerciseService,
    private pauseConsideration: PauseConsiderationService,
    private contemplationConsideration: ContemplationConsiderationService*/
  {}

  ngOnInit(): void {}

  showContemplations() {
    this.showContemplation = true;
    this.showPause = false;
  }

  showPauses() {
    this.showContemplation = false;
    this.showPause = true;
  }
}
