import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ContemplationListComponent } from './contemplation-list/contemplation-list.component';
import { PauseListComponent } from './pause-list/pause-list.component';
import { ContemplationExerciseComponent } from './contemplation-exercise/contemplation-exercise.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ContemplationConsiderationComponent } from './contemplation-consideration/contemplation-consideration.component';
import { ContemplationConsiderationListComponent } from './profile/contemplation-consideration-list/contemplation-consideration-list.component';
import { PauseConsiderationListComponent } from './profile/pause-consideration-list/pause-consideration-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PauseExerciseComponent } from './pause-exercise/pause-exercise.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterUserComponent } from './footer-user/footer-user.component';
@NgModule({
  declarations: [
    CreateAccountComponent,
    NavbarComponent,
    ContemplationListComponent,
    PauseListComponent,
    ContemplationExerciseComponent,
    ProfileComponent,
    SettingsComponent,
    ContemplationConsiderationComponent,
    ContemplationConsiderationListComponent,
    PauseConsiderationListComponent,
    HomeComponent,
    PauseExerciseComponent,
    FooterUserComponent,
  ],
  imports: [CommonModule, SharedComponentsModule, FontAwesomeModule],
  exports: [
    CreateAccountComponent,
    NavbarComponent,
    ContemplationListComponent,
    PauseListComponent,
    ContemplationExerciseComponent,
    ProfileComponent,
    SettingsComponent,
    ContemplationConsiderationComponent,
    ContemplationConsiderationListComponent,
    PauseConsiderationListComponent,
    HomeComponent,
    PauseExerciseComponent,
    FooterUserComponent,
  ],
})
export class UserModule {}
