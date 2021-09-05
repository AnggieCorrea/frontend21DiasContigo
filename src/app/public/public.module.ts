import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { HomeAdministrationComponent } from '../admin/home-administration/home-administration.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    HomeAdministrationComponent,
  ],
  imports: [FormsModule, CommonModule],
})
export class PublicModule {}
