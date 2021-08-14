import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritualExerciseComponent } from './spiritual-exercise.component';

describe('SpiritualExerciseComponent', () => {
  let component: SpiritualExerciseComponent;
  let fixture: ComponentFixture<SpiritualExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiritualExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritualExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
