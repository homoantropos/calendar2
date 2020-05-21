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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {SearchPipe} from './pipes/search.pipe';
import {AlertComponent} from './alert/alert.component';
import {MatIcon} from '@angular/material/icon';

@NgModule({
  declarations: [
    ToggleDirective,
    MagnifierDirective,
    FilterPipe,
    SearchPipe,
    EventCreatorComponent,
    AlertComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ToggleDirective,
    MagnifierDirective,
    FilterPipe,
    SearchPipe,
    EventCreatorComponent,
    AlertComponent
  ]
})

export class SharedModule {}
