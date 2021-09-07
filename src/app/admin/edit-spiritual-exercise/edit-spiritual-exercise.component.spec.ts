import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpiritualExerciseComponent } from './edit-spiritual-exercise.component';

describe('EditSpiritualExerciseComponent', () => {
  let component: EditSpiritualExerciseComponent;
  let fixture: ComponentFixture<EditSpiritualExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSpiritualExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpiritualExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
