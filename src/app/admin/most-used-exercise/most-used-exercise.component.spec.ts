import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostUsedExerciseComponent } from './most-used-exercise.component';

describe('MostUsedExerciseComponent', () => {
  let component: MostUsedExerciseComponent;
  let fixture: ComponentFixture<MostUsedExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostUsedExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostUsedExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
