import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SpiritualExercisesAdministrationComponent } from './spiritual-exercises-administration/spiritual-exercises-administration.component';

@NgModule({
  declarations: [
    NavbarAdminComponent,
    SpiritualExercisesAdministrationComponent,
  ],
  imports: [CommonModule],
  exports: [],
})
export class AdminModule {}
