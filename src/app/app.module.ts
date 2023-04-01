import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionComponent } from './components/question/question.component';
import { RoomComponent } from './components/room/room.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RoomPageComponent } from './pages/room-page/room-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {UserAuthHeaderInterceptor} from "./configs/auth-config/user-auth-header.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionComponent,
    RoomComponent,
    LoginPageComponent,
    RoomPageComponent,
    DashboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthHeaderInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
