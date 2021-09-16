import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { HomeAdministrationComponent } from '../admin/home-administration/home-administration.component';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    LandingComponent,
    HomeAdministrationComponent,
  ],
  imports: [FormsModule, CommonModule],
})
export class PublicModule {}
