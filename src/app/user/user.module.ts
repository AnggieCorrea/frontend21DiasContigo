import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ContemplationListComponent } from './contemplation-list/contemplation-list.component';
import { PauseListComponent } from './pause-list/pause-list.component';
import { SpiritualExerciseComponent } from './spiritual-exercise/spiritual-exercise.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { PauseConsiderationComponent } from './pause-consideration/pause-consideration.component';
import { ContemplationConsiderationComponent } from './contemplation-consideration/contemplation-consideration.component';
import { ContemplationConsiderationListComponent } from './profile/contemplation-consideration-list/contemplation-consideration-list.component';
import { PauseConsiderationListComponent } from './profile/pause-consideration-list/pause-consideration-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    CreateAccountComponent,
    NavbarComponent,
    ContemplationListComponent,
    PauseListComponent,
    SpiritualExerciseComponent,
    ProfileComponent,
    SettingsComponent,
    PauseConsiderationComponent,
    ContemplationConsiderationComponent,
    ContemplationConsiderationListComponent,
    PauseConsiderationListComponent,
    HomeComponent,
  ],
  imports: [CommonModule, SharedComponentsModule],
  exports: [
    CreateAccountComponent,
    ContemplationListComponent,
    PauseListComponent,
    SpiritualExerciseComponent,
    ProfileComponent,
    SettingsComponent,
  ],
})
export class UserModule {}
