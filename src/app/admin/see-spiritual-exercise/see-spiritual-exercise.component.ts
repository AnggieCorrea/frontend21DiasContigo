import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpiritualExercise } from 'src/app/models/SpiritualExercise';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-see-spiritual-exercise',
  templateUrl: './see-spiritual-exercise.component.html',
  styleUrls: ['./see-spiritual-exercise.component.scss'],
})
export class SeeSpiritualExerciseComponent implements OnInit {
  id: string;
  selectedSpiritualExercise: SpiritualExercise;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private spiritualExerciseService: SpiritualExerciseService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.selectedSpiritualExercise =
      this.spiritualExerciseService.getSpiritualExerciseById(+this.id);
  }
}
