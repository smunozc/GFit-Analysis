import { AngularFireModule } from '@angular/fire'
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartistModule } from 'ng-chartist';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page404Component } from './page404/page404.component';

import { environment } from '../environments/environment';
import { ChartComponent } from './chart/chart.component';
import { ProfileComponent } from './profile/profile.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    Page404Component,
    ChartComponent,
    ProfileComponent,
    ScoreboardComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.fireBaseConfig),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChartistModule
  ],
  providers: [ChartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
