import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { CreateAccountComponent } from './user/create-account/create-account.component';
import { ContemplationListComponent } from './user/contemplation-list/contemplation-list.component';
import { PauseListComponent } from './user/pause-list/pause-list.component';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { ConsiderationComponent } from './user/consideration/consideration.component';

const routes: Routes = [
  {path: '', pathMatch: 'full' , redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createAccount', component: CreateAccountComponent},
  {path: 'contemplationsMap', component: ContemplationListComponent},
  {path: 'pauseList', component: PauseListComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'consideration', component: ConsiderationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
