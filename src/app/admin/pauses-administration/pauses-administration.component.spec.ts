import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PausesAdministrationComponent } from './pauses-administration.component';

describe('PausesAdministrationComponent', () => {
  let component: PausesAdministrationComponent;
  let fixture: ComponentFixture<PausesAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PausesAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PausesAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
