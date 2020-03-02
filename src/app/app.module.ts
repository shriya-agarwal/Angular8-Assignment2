import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';

import { MatTableModule, MatButtonModule } from '@angular/material';
import { PremiumEventsComponent } from './premium-events/premium-events.component';
import { HiddenAttributeComponent } from './hidden-attribute/hidden-attribute.component';
import { EventFormatComponent } from './event-format/event-format.component';
import { StyleWithNgClassComponent } from './style-with-ng-class/style-with-ng-class.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    PremiumEventsComponent,
    HiddenAttributeComponent,
    EventFormatComponent,
    StyleWithNgClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
