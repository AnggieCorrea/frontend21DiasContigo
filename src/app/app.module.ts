import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { UserModule } from './user/user.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { AdminModule } from './admin/admin.module';

import { ContTileMapService } from './services/cont-tile-map.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    UserModule,
    AdminModule,
    SharedComponentsModule,
  ],
  exports: [],
  providers: [ContTileMapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
