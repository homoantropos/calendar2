import {NgModule} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import {ToggleDirective} from './directives/toggle.directive';
import {MagnifierDirective} from './directives/magnifier.directive';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  declarations: [
    ToggleDirective,
    MagnifierDirective,
    FilterPipe
  ],
  imports: [
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    ToggleDirective,
    MagnifierDirective,
    FilterPipe,
  ]
})

export class SharedModule {}
