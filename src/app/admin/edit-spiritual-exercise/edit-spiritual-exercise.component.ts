import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpiritualExercise } from 'src/app/models/SpiritualExercise';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';

@Component({
  selector: 'app-edit-spiritual-exercise',
  templateUrl: './edit-spiritual-exercise.component.html',
  styleUrls: ['./edit-spiritual-exercise.component.scss'],
})
export class EditSpiritualExerciseComponent implements OnInit {
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
