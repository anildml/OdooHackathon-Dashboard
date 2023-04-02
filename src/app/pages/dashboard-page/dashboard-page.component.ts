import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user-service/user.service";
import {Router} from "@angular/router";
import {PlanService} from "../../services/plan-service/plan.service";
import {RoomService} from "../../services/room-service/room.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  doesUserHaveQuestions: boolean = false;

  questionList: any[] = [];
  questionIndex = 1;
  questionsFinished: boolean = false;

  replyList: string[] = [];

  answer: string;
  answerButtonTitle: string = "Answer";

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
    private planService: PlanService,
    private roomService: RoomService
  ) { }

  async ngOnInit(): Promise<void> {

    // await this.userService.login("user3", "password");

    if (!this.userService.isLoggedIn()) {
      this.router.navigate(["login"]);
    }

    if (this.roomService.doesUserHaveARoom()) {
      this.router.navigate(["room"]);
    }

    let a = await this.planService.getQuestionList();
    this.doesUserHaveQuestions = !a[0].hasReplied;
    this.questionList = a[0].plan.question;


  }

  public async answerQuestion() {
    await this.planService.answerQuestion(this.questionIndex, this.answer);
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
