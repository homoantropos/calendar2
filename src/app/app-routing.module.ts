import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventCreatorComponent } from './event/event-creator/event-creator.component';
import {ScheduleComponent} from './schedule/schedule/schedule.component';

const routs: Routes = [
  {path: '', component: ScheduleComponent},
  {path: 'creator', component: EventCreatorComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routs) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
