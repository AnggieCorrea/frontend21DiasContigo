import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContemplationListComponent } from './contemplation-list.component';

describe('UserContemplationListComponent', () => {
  let component: UserContemplationListComponent;
  let fixture: ComponentFixture<UserContemplationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserContemplationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContemplationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
