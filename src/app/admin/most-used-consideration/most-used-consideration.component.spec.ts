import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostUsedConsiderationComponent } from './most-used-consideration.component';

describe('MostUsedConsiderationComponent', () => {
  let component: MostUsedConsiderationComponent;
  let fixture: ComponentFixture<MostUsedConsiderationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostUsedConsiderationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostUsedConsiderationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
