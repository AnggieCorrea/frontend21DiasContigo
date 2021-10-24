import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SpiritualExercisesAdministrationComponent } from './spiritual-exercises-administration/spiritual-exercises-administration.component';
import { SeeSpiritualExerciseComponent } from './see-spiritual-exercise/see-spiritual-exercise.component';
import { EditSpiritualExerciseComponent } from './edit-spiritual-exercise/edit-spiritual-exercise.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { MostUsedExerciseComponent } from './most-used-exercise/most-used-exercise.component';
import { MostUsedConsiderationComponent } from './most-used-consideration/most-used-consideration.component';
import { HomeAdministrationComponent } from './home-administration/home-administration.component';

@NgModule({
  declarations: [
    HomeAdministrationComponent,
    NavbarAdminComponent,
    SpiritualExercisesAdministrationComponent,
    SeeSpiritualExerciseComponent,
    EditSpiritualExerciseComponent,
    FooterAdminComponent,
    MostUsedExerciseComponent,
    MostUsedConsiderationComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FontAwesomeModule,
    ChartsModule,
  ],
  exports: [],
})
export class AdminModule {}
