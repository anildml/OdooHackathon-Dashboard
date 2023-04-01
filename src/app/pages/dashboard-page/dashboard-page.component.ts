import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user-service/user.service";
import {Router} from "@angular/router";
import {PlanService} from "../../services/plan-service/plan.service";
import {RoomService} from "../../services/room-service/room.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  private doesUserHaveQuestions: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private planService: PlanService,
    private roomService: RoomService
  ) { }

  ngOnInit(): void {

    if (!this.userService.isLoggedId()) {
      this.router.navigate(["login"]);
    }

    if (this.roomService.doesUserHaveARoom()) {
      this.router.navigate(["room"]);
    }

    this.doesUserHaveQuestions = this.planService.doesUserHaveQuestionsToAnswer();

  }

}
