import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { MenuComponent } from './menu/menu.component';
import { RatingDirective } from './rating.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarsComponent } from './stars/stars.component';
import { ProfileComponent } from './profile/profile.component';
import { DemandComponent } from './demand/demand.component';
import { ProfileRoutingModule } from "./profile/profile-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    VolunteerListComponent,
    MenuComponent,
    RatingDirective,
    StarsComponent,
    ProfileComponent,
    DemandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FontAwesomeModule,
    ProfileRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
