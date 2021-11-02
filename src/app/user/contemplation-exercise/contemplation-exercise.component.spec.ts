import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContemplationExerciseComponent } from './contemplation-exercise.component';

describe('ContemplationExerciseComponent', () => {
  let component: ContemplationExerciseComponent;
  let fixture: ComponentFixture<ContemplationExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContemplationExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContemplationExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
