import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContemplationConsiderationListComponent } from './contemplation-consideration-list.component';

describe('ContemplationConsiderationListComponent', () => {
  let component: ContemplationConsiderationListComponent;
  let fixture: ComponentFixture<ContemplationConsiderationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContemplationConsiderationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContemplationConsiderationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
