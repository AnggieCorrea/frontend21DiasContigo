import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { ContemplationsAdministrationComponent } from './contemplations-administration/contemplations-administration.component';
import { PausesAdministrationComponent } from './pauses-administration/pauses-administration.component';

@NgModule({
  declarations: [
    NavbarAdminComponent,
    ContemplationsAdministrationComponent,
    PausesAdministrationComponent,
  ],
  imports: [CommonModule],
  exports: [],
})
export class AdminModule {}
