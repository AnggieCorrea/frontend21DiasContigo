import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { ContemplationsAdministrationComponent } from './contemplations-administration/contemplations-administration.component';

@NgModule({
  declarations: [NavbarAdminComponent, ContemplationsAdministrationComponent],
  imports: [CommonModule],
  exports: [ContemplationsAdministrationComponent],
})
export class AdminModule {}
