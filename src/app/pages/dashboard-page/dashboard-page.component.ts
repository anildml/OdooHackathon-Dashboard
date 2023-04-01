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

  doesUserHaveQuestions: boolean = false;
  questionList: string[] = [
    "How do you feel?",
    "How do you feel?",
    "Question 3",
    "Question 4"
  ];
  questionIndex = 0;
  questionsFinished: boolean = false;

  replyList: string[] = [];

  answer: string;
  answerButtonTitle: string = "Answer";

  constructor(
    private userService: UserService,
    private router: Router,
    private planService: PlanService,
    private roomService: RoomService
  ) { }

  async ngOnInit(): Promise<void> {

    if (!this.userService.isLoggedIn()) {
      this.router.navigate(["login"]);
    }

    if (this.roomService.doesUserHaveARoom()) {
      this.router.navigate(["room"]);
    }

    this.doesUserHaveQuestions = !this.planService.doesUserHaveQuestionsToAnswer();

  }

  public goToNextQuestion() {
    this.replyList.push(this.answer);
    this.answer = "";
    this.questionIndex++;
    if (this.questionIndex == this.questionList.length - 1) {
      this.answerButtonTitle = "Finish";
    }
    if (this.questionIndex == this.questionList.length) {
      this.questionsFinished = true;
      this.doesUserHaveQuestions = false;
    }
  }

}
