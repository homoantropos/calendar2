import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { EventDetailsComponent } from './event-details/event-details.component';
import {EventCreatorComponent} from './event-creator/event-creator.component';

const eventsRoutes: Routes = [
  {path: 'creator', component: EventCreatorComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(eventsRoutes)],
  exports: [RouterModule]
})

export class EventRoutingModule {}
