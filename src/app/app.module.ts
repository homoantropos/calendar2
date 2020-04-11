import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EventRowComponent } from './event/event-row/event-row.component';
import { EventCreatorComponent } from './event/event-creator/event-creator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToggleDirective } from './directives/toggle.directive';
import { MagnifierDirective } from './directives/magnifier.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { ScheduleComponent } from './schedule/schedule/schedule.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EventRowComponent,
    EventCreatorComponent,
    ToggleDirective,
    MagnifierDirective,
    FilterPipe,
    ScheduleComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
