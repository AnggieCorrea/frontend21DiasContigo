import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { CreateAccountComponent } from './user/create-account/create-account.component';
import { ContemplationListComponent } from './user/contemplation-list/contemplation-list.component';
import { PauseListComponent } from './user/pause-list/pause-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingsComponent } from './user/settings/settings.component';
import { SpiritualExerciseComponent } from './user/spiritual-exercise/spiritual-exercise.component';
import { HomeAdministrationComponent } from './admin/home-administration/home-administration.component';
import { SpiritualExercisesAdministrationComponent } from './admin/spiritual-exercises-administration/spiritual-exercises-administration.component';
import { SeeSpiritualExerciseComponent } from './admin/see-spiritual-exercise/see-spiritual-exercise.component';
import { EditSpiritualExerciseComponent } from './admin/edit-spiritual-exercise/edit-spiritual-exercise.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  //user routing
  {
    path: 'createAccount',
    component: CreateAccountComponent,
  },
  {
    path: 'contemplationsMap',
    component: ContemplationListComponent,
  },
  {
    path: 'pauseMap',
    component: PauseListComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'spiritualExcercise',
    component: SpiritualExerciseComponent,
  },
  //admin routing
  {
    path: 'homeAdministration',
    component: HomeAdministrationComponent,
  },
  {
    path: 'spiritualExerciseAdministration',
    component: SpiritualExercisesAdministrationComponent,
  },
  {
    path: 'seeSpiritualExercise/:id',
    component: SeeSpiritualExerciseComponent,
  },
  {
    path: 'editSpiritualExercise/:id',
    component: EditSpiritualExerciseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
