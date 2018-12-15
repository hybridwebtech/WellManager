import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BasemapService } from './services/basemap.service';
import { BasemapComponent } from './components/basemap/basemap.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BasemapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutes,
  ],
  providers: [BasemapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
