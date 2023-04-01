import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionComponent } from './components/question/question.component';
import { RoomComponent } from './components/room/room.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';
import { RoomPageComponent } from './pages/room-page/room-page.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {UserAuthHeaderInterceptor} from "./configs/auth-config/user-auth-header.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionComponent,
    RoomComponent,
    LoginPageComponent,
    QuestionsPageComponent,
    RoomPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
