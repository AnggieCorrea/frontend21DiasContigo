import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { TabComponent } from './tab/tab.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { MicrophoneRecorderComponent } from './microphone-recorder/microphone-recorder.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    GridComponent,
    TabComponent,
    AudioPlayerComponent,
    MicrophoneRecorderComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, NgbModule],
  exports: [
    GridComponent,
    TabComponent,
    AudioPlayerComponent,
    MicrophoneRecorderComponent,
    NavbarComponent,
    FooterComponent,
  ],
})
export class SharedComponentsModule {}
