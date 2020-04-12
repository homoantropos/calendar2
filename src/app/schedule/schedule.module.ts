import { NgModule } from '@angular/core';
import { ScheduleComponent } from './schedule/schedule.component';
import {CommonModule} from '@angular/common';
import {EventModule} from '../event/event.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EventModule
  ],
  declarations: [
    ScheduleComponent
  ],
  exports: [
    ScheduleComponent
  ]
})

export class ScheduleModule {}
