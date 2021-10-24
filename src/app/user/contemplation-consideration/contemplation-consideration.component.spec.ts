import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContemplationConsiderationComponent } from './contemplation-consideration.component';

describe('ContemplationConsiderationComponent', () => {
  let component: ContemplationConsiderationComponent;
  let fixture: ComponentFixture<ContemplationConsiderationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContemplationConsiderationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContemplationConsiderationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
