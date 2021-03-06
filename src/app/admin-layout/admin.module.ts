import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {AdminRoutingModule} from './admin-routing.module';
import { EventEditorPageComponent } from './event-editor-page/event-editor-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import {AuthGuard} from './auth-guard/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AdminRoutingModule
  ],
  exports: [],
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    EventEditorPageComponent,
    DashboardPageComponent
  ],
  providers: [
    AuthGuard
  ]
})

export class AdminModule {}
