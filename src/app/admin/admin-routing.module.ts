import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from './components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {EventCreatorComponent} from './event-creator/event-creator.component';
import {EventEditorPageComponent} from './event-editor-page/event-editor-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';

const routes: Routes = [
  {path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'dashboard', component: DashboardPageComponent},
      {path: 'create', component: EventCreatorComponent},
      {path: 'schedule/:id/edit', component: EventEditorPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
