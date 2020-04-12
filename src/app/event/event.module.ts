import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRowComponent } from './event-row/event-row.component';
import { EventDetailsComponent } from './event-details/event-details.component';

import { EventRoutingModule } from './event-routing.module';
import { EventCreatorComponent } from './event-creator/event-creator.component';
import { SharedModule } from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    EventRoutingModule,
    SharedModule,
  ],
  declarations: [
    EventRowComponent,
    EventDetailsComponent,
    EventCreatorComponent
  ],
  exports: [
    EventRowComponent,
    EventDetailsComponent,
    EventCreatorComponent,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class EventModule {}
