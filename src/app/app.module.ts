import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { UserModule } from './user/user.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { AdminModule } from './admin/admin.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    UserModule,
    AdminModule,
    SharedComponentsModule,
    ChartsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
