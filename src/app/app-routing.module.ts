import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { CreateAccountComponent } from './user/create-account/create-account.component';
import { ContemplationListComponent } from './user/contemplation-list/contemplation-list.component';
import { PauseListComponent } from './user/pause-list/pause-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingsComponent } from './user/settings/settings.component';
import { SpiritualExerciseComponent } from './user/spiritual-exercise/spiritual-exercise.component';
import { ContemplationsAdministrationComponent } from './admin/contemplations-administration/contemplations-administration.component';
import { PausesAdministrationComponent } from './admin/pauses-administration/pauses-administration.component';
import { LandingComponent } from './public/landing/landing.component';
import { HomeComponent } from './user/home/home.component';
import { PauseExerciseComponent } from './user/pause-exercise/pause-exercise.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/landing',
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  //user routing
  {
    path: 'home',
    component: HomeComponent,
  },
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
  {
    path: 'pauseExcercise',
    component: PauseExerciseComponent,
  },
  //admin routing
  {
    path: 'contemplationsAdministration',
    component: ContemplationsAdministrationComponent,
  },
  {
    path: 'pausesAdministration',
    component: PausesAdministrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
