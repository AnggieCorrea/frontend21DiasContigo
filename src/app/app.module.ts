import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { UserModule } from './user/user.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { AdminModule } from './admin/admin.module';

import { ContTileMapService } from './services/cont-tile-map.service';
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
    HttpClientModule,
  ],
  exports: [],
  providers: [ContTileMapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
