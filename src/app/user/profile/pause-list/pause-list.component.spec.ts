import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPauseListComponent } from './pause-list.component';

describe('UserPauseListComponent', () => {
  let component: UserPauseListComponent;
  let fixture: ComponentFixture<UserPauseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPauseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPauseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
