import { NgModule } from '@angular/core';
import { ScheduleComponent } from './schedule/schedule.component';
import {CommonModule} from '@angular/common';
import {EventModule} from '../event/event.module';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ScheduleComponent}
    ]),
    EventModule
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
