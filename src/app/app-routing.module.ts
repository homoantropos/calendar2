import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EventCreatorComponent } from './event-creator/event-creator.component';

const routs: Routes = [
	{path: '', component: AppComponent},
	{path: 'creator', component: EventCreatorComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routs) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {

}