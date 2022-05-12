import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { ScrollspyComponent } from './components/scrollspy/scrollspy.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AlertsComponent,
    BadgesComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CarouselComponent,
    SpinnersComponent,
    ScrollspyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
