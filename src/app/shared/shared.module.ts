import {NgModule} from '@angular/core';

import {ToggleDirective} from './directives/toggle.directive';
import {MagnifierDirective} from './directives/magnifier.directive';
import {FilterPipe} from './pipes/filter.pipe';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ToggleDirective,
    MagnifierDirective,
    FilterPipe
  ],
  imports: [
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    ToggleDirective,
    MagnifierDirective,
    FilterPipe
  ]
})

export class SharedModule {}
