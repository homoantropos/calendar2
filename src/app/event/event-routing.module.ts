import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { EventDetailsComponent } from './event-details/event-details.component';

const eventsRoutes: Routes = [
  {path: 'event:id', component: EventDetailsComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(eventsRoutes)],
  exports: [RouterModule]
})

export class EventRoutingModule {}
