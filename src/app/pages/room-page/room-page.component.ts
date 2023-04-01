import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user-service/user.service";
import {Router} from "@angular/router";
import {PlanService} from "../../services/plan-service/plan.service";
import {RoomService} from "../../services/room-service/room.service";

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.css']
})
export class RoomPageComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private planService: PlanService,
    private roomService: RoomService
  ) { }

  ngOnInit(): void {

    if (!this.userService.isLoggedIn()) {
      this.router.navigate(["login"]);
    }

    if (!this.roomService.doesUserHaveARoom()) {
      this.router.navigate(["dashboard"]);
    }

  }

}
