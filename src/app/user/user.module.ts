import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ContemplationListComponent } from './contemplation-list/contemplation-list.component';
import { PauseListComponent } from './pause-list/pause-list.component';
import { SpiritualExerciseComponent } from './spiritual-exercise/spiritual-exercise.component';
import { ConsiderationComponent } from './consideration/consideration.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { UserContemplationListComponent } from './profile/contemplation-list/contemplation-list.component';
import { UserPauseListComponent } from './profile/pause-list/pause-list.component';

@NgModule({
  declarations: [
    CreateAccountComponent,
    ContemplationListComponent,
    PauseListComponent,
    SpiritualExerciseComponent,
    ConsiderationComponent,
    ProfileComponent,
    SettingsComponent,
    UserPauseListComponent,
    UserContemplationListComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    CreateAccountComponent,
    ContemplationListComponent,
    PauseListComponent,
    SpiritualExerciseComponent,
    ConsiderationComponent,
    ProfileComponent,
    SettingsComponent
  ]
})
export class UserModule { }
