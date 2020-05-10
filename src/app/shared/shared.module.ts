import {NgModule} from '@angular/core';

import {ToggleDirective} from './directives/toggle.directive';
import {MagnifierDirective} from './directives/magnifier.directive';
import {FilterPipe} from './pipes/filter.pipe';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {EventCreatorComponent} from '../admin-layout/event-creator/event-creator.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ToggleDirective,
    MagnifierDirective,
    FilterPipe,
    EventCreatorComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    ToggleDirective,
    MagnifierDirective,
    FilterPipe,
    EventCreatorComponent
  ]
})

export class SharedModule {}
