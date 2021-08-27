import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseConsiderationListComponent } from './pause-consideration-list.component';

describe('PauseConsiderationListComponent', () => {
  let component: PauseConsiderationListComponent;
  let fixture: ComponentFixture<PauseConsiderationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PauseConsiderationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PauseConsiderationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
