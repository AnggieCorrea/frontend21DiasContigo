import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritualExercisesAdministrationComponent } from './spiritual-exercises-administration.component';

describe('SpiritualExercisesAdministrationComponent', () => {
  let component: SpiritualExercisesAdministrationComponent;
  let fixture: ComponentFixture<SpiritualExercisesAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiritualExercisesAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritualExercisesAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
