import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SingleEventComponent } from './single-event/single-event.component';
import { EventCreatorComponent } from './event-creator/event-creator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToggleDirective } from './directives/toggle.directive';
import { MagnifierDirective } from './directives/magnifier.directive';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SingleEventComponent,
    EventCreatorComponent,
    ToggleDirective,
    MagnifierDirective,
    FilterPipe
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
