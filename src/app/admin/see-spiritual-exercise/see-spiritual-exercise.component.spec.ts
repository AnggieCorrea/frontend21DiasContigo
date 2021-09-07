import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeSpiritualExerciseComponent } from './see-spiritual-exercise.component';

describe('SeeSpiritualExerciseComponent', () => {
  let component: SeeSpiritualExerciseComponent;
  let fixture: ComponentFixture<SeeSpiritualExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeSpiritualExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeSpiritualExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
