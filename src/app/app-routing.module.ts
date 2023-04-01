import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {RoomPageComponent} from "./pages/room-page/room-page.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'room', component: RoomPageComponent },
  { path: '**', component: DashboardPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
