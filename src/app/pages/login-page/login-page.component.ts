import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user-service/user.service";
import {Router} from "@angular/router";
import {PlanService} from "../../services/plan-service/plan.service";
import {RoomService} from "../../services/room-service/room.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

    if (this.userService.isLoggedId()) {
      this.router.navigate(["dashboard"]);
    }

  }

}
