import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { MicrophoneRecorderComponent } from './microphone-recorder/microphone-recorder.component';

@NgModule({
  declarations: [
    AudioPlayerComponent,
    MicrophoneRecorderComponent,
  ],
  imports: [CommonModule],
  exports: [
    AudioPlayerComponent,
    MicrophoneRecorderComponent,
  ],
})
export class SharedComponentsModule {}
