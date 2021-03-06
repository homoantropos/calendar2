import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './main-layout/page-not-found/page-not-found.component';
import {ScheduleComponent} from './main-layout/schedule/schedule/schedule.component';
import { MainLayoutPageComponent } from './main-layout/components/main-layout-page/main-layout-page.component';
import {EventRowComponent} from './main-layout/components/event/event-row/event-row.component';
import {EventDetailsComponent} from './main-layout/components/event/event-details/event-details.component';
import {HomePageComponent} from './main-layout/home-page/home-page.component';
import {EventsService} from './main-layout/components/event/events.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './admin-layout/auth-guard/auth.interceptor';
import {MatDatepickerModule} from '@angular/material/datepicker';

const INTERCEPTION_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ScheduleComponent,
    EventRowComponent,
    EventDetailsComponent,
    MainLayoutPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    INTERCEPTION_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
