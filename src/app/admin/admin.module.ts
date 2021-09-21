import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SpiritualExercisesAdministrationComponent } from './spiritual-exercises-administration/spiritual-exercises-administration.component';
import { SeeSpiritualExerciseComponent } from './see-spiritual-exercise/see-spiritual-exercise.component';
import { EditSpiritualExerciseComponent } from './edit-spiritual-exercise/edit-spiritual-exercise.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StadisticsComponent } from './stadistics/stadistics.component';
import { ChartsModule } from 'ng2-charts';
import { MostUsedExerciseComponent } from './most-used-exercise/most-used-exercise.component';

@NgModule({
  declarations: [
    NavbarAdminComponent,
    SpiritualExercisesAdministrationComponent,
    SeeSpiritualExerciseComponent,
    EditSpiritualExerciseComponent,
    FooterAdminComponent,
    StadisticsComponent,
    MostUsedExerciseComponent,
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
