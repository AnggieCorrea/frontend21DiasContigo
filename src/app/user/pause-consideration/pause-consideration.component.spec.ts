import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseConsiderationComponent } from './pause-consideration.component';

describe('PauseConsiderationComponent', () => {
  let component: PauseConsiderationComponent;
  let fixture: ComponentFixture<PauseConsiderationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PauseConsiderationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PauseConsiderationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
