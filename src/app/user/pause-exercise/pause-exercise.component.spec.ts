import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseExerciseComponent } from './pause-exercise.component';

describe('PauseExerciseComponent', () => {
  let component: PauseExerciseComponent;
  let fixture: ComponentFixture<PauseExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PauseExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PauseExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
