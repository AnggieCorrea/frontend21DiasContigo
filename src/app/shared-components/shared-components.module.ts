import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { TabComponent } from './tab/tab.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { MicrophoneRecorderComponent } from './microphone-recorder/microphone-recorder.component';

@NgModule({
  declarations: [
    GridComponent,
    TabComponent,
    AudioPlayerComponent,
    MicrophoneRecorderComponent,
  ],
  imports: [CommonModule],
  exports: [
    GridComponent,
    TabComponent,
    AudioPlayerComponent,
    MicrophoneRecorderComponent,
  ],
})
export class SharedComponentsModule {}
