import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ContemplationListComponent } from './contemplation-list/contemplation-list.component';
import { PauseListComponent } from './pause-list/pause-list.component';
import { SpiritualExerciseComponent } from './spiritual-exercise/spiritual-exercise.component';
import { ConsiderationComponent } from './consideration/consideration.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { LayoutsModule} from 'src/app/layouts/layouts.module';

@NgModule({
  declarations: [
    CreateAccountComponent,
    ContemplationListComponent,
    PauseListComponent,
    SpiritualExerciseComponent,
    ConsiderationComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule
  ]
})
export class UserModule { }
