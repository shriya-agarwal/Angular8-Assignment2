import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { PremiumEventsComponent } from './premium-events/premium-events.component';
import { HiddenAttributeComponent } from './hidden-attribute/hidden-attribute.component';
import { EventFormatComponent } from './event-format/event-format.component';
import { StyleWithNgClassComponent } from './style-with-ng-class/style-with-ng-class.component';


const routes: Routes = [
  {path: 'event', component: EventsComponent},
  {path: 'premium-event', component: PremiumEventsComponent},
  {path: 'hidden-attribute', component: HiddenAttributeComponent},
  {path: 'event-format', component: EventFormatComponent},
  {path: 'style-ngClass', component: StyleWithNgClassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
