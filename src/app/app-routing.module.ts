import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { CreateAccountComponent } from './user/create-account/create-account.component';
import { ContemplationListComponent } from './user/contemplation-list/contemplation-list.component';
import { PauseListComponent } from './user/pause-list/pause-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingsComponent } from './user/settings/settings.component';
import { ContemplationExerciseComponent } from './user/contemplation-exercise/contemplation-exercise.component';
import { LandingComponent } from './public/landing/landing.component';
import { HomeComponent } from './user/home/home.component';
import { HomeAdministrationComponent } from './admin/home-administration/home-administration.component';
import { SpiritualExercisesAdministrationComponent } from './admin/spiritual-exercises-administration/spiritual-exercises-administration.component';
import { SeeSpiritualExerciseComponent } from './admin/see-spiritual-exercise/see-spiritual-exercise.component';
import { EditSpiritualExerciseComponent } from './admin/edit-spiritual-exercise/edit-spiritual-exercise.component';
import { MostUsedExerciseComponent } from './admin/most-used-exercise/most-used-exercise.component';
import { MostUsedConsiderationComponent } from './admin/most-used-consideration/most-used-consideration.component';
import { FooterAdminComponent } from './admin/footer-admin/footer-admin.component';
import { PauseExerciseComponent } from './user/pause-exercise/pause-exercise.component';
import { FooterUserComponent } from './user/footer-user/footer-user.component';
import { ContemplationConsiderationComponent } from './user/contemplation-consideration/contemplation-consideration.component';

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
    path: 'footerUser',
    component: FooterUserComponent,
  },
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
    path: 'contemplationExercise/:id',
    component: ContemplationExerciseComponent,
  },
  {
    path: 'pauseExercise/:id',
    component: PauseExerciseComponent,
  },
  {
    path: 'contemplationConsideration/:id',
    component: ContemplationConsiderationComponent,
  },
  //admin routing
  {
    path: 'footerAdmin',
    component: FooterAdminComponent,
  },
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
  {
    path: 'mostUsedExercise',
    component: MostUsedExerciseComponent,
  },
  {
    path: 'mostUsedConsideration',
    component: MostUsedConsiderationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
