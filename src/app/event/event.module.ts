import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRowComponent } from './event-row/event-row.component';
import { EventDetailsComponent } from './event-details/event-details.component';

import { EventRoutingModule } from './event-routing.module';
import { EventCreatorComponent } from './event-creator/event-creator.component';
import { SharedModule } from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    EventRoutingModule,
    SharedModule
  ],
  declarations: [
    EventRowComponent,
    EventDetailsComponent,
    EventCreatorComponent
  ],
  exports: [
    EventRowComponent,
    EventDetailsComponent,
    EventCreatorComponent
  ]
})
export class EventModule {}
