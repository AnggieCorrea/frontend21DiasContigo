import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrophoneRecorderComponent } from './microphone-recorder.component';

describe('MicrophoneRecorderComponent', () => {
  let component: MicrophoneRecorderComponent;
  let fixture: ComponentFixture<MicrophoneRecorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrophoneRecorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrophoneRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
