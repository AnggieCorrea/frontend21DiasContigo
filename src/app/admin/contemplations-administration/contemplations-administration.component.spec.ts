import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContemplationsAdministrationComponent } from './contemplations-administration.component';

describe('ContemplationsAdministrationComponent', () => {
  let component: ContemplationsAdministrationComponent;
  let fixture: ComponentFixture<ContemplationsAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContemplationsAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContemplationsAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
