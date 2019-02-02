import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllIncidentsComponent } from './all-incidents/all-incidents.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MapVisualComponent } from './map-visual/map-visual.component';

@NgModule({
  declarations: [
    AppComponent,
    AllIncidentsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MapVisualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
