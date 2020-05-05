import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './admin/auth-guard/auth.guard';
import {ScheduleComponent} from './schedule/schedule/schedule.component';
import {MainLayoutPageComponent} from './main-layout/components/main-layout-page/main-layout-page.component';
import {EventDetailsComponent} from './main-layout/components/event/event-details/event-details.component';

const routes: Routes = [
  {path: '', component: MainLayoutPageComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'schedule/:id', component: EventDetailsComponent}
    ]},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
