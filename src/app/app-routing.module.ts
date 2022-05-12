import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ScrollspyComponent } from './components/scrollspy/scrollspy.component';
import { SpinnersComponent } from './components/spinners/spinners.component';

const routes: Routes = [
  { path: 'components/button', component: ButtonComponent },
  { path: 'components/accordion', component: AccordionComponent },
  { path: 'components/alerts', component: AlertsComponent },
  { path: 'components/badges', component: BadgesComponent },
  { path: 'components/button-group', component: ButtonGroupComponent },
  { path: 'components/card', component: CardComponent },
  { path: 'components/carousel', component: CarouselComponent },
  { path: 'components/scrollspy', component: ScrollspyComponent },
  { path: 'components/spinners', component: SpinnersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
