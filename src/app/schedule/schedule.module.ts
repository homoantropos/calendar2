import { NgModule } from '@angular/core';
import { ScheduleComponent } from './schedule/schedule.component';
import {CommonModule} from '@angular/common';
import {EventModule} from '../event/event.module';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EventDetailsComponent} from '../event/event-details/event-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ScheduleComponent},
      {path: ':id', component: EventDetailsComponent}
    ]),
    EventModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ScheduleComponent
  ],
  exports: [
    ScheduleComponent,
    RouterModule
  ]
})

export class ScheduleModule {}
