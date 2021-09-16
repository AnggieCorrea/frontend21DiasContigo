import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SpiritualExercisesAdministrationComponent } from './spiritual-exercises-administration/spiritual-exercises-administration.component';
import { SeeSpiritualExerciseComponent } from './see-spiritual-exercise/see-spiritual-exercise.component';
import { EditSpiritualExerciseComponent } from './edit-spiritual-exercise/edit-spiritual-exercise.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    NavbarAdminComponent,
    SpiritualExercisesAdministrationComponent,
    SeeSpiritualExerciseComponent,
    EditSpiritualExerciseComponent,
    FooterAdminComponent,
  ],
  imports: [CommonModule, SharedComponentsModule, FontAwesomeModule],
  exports: [],
})
export class AdminModule {}
