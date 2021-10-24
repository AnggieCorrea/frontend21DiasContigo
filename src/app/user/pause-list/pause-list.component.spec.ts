import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseListComponent } from './pause-list.component';

describe('PauseListComponent', () => {
  let component: PauseListComponent;
  let fixture: ComponentFixture<PauseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PauseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PauseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
