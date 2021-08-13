import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContemplationListComponent } from './contemplation-list.component';

describe('ContemplationListComponent', () => {
  let component: ContemplationListComponent;
  let fixture: ComponentFixture<ContemplationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContemplationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContemplationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
