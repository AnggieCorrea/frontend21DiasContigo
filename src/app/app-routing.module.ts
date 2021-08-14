import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/public/home/home.component';
import { LoginComponent } from './Pages/public/login/login.component';
import { CreateAccountComponent } from './Pages/user/create-account/create-account.component';
import { ContemplationListComponent } from './Pages/user/contemplation-list/contemplation-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full' , redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createAccount', component: CreateAccountComponent},
  {path: 'contemplationsMap', component: ContemplationListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
