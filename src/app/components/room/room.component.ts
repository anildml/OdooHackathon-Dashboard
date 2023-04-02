import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../services/room-service/room.service";
import {PlanService} from "../../services/plan-service/plan.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  roomName: string;
  questionsGrouped: any = {};
  questionCount = 1;

  profileImages: string[] = [
    "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
    "https://xsgames.co/randomusers/assets/avatars/male/8.jpg",
    "https://pyxis.nymag.com/v1/imgs/74e/daf/1293f7c0ebc1dda4f28d2ed0db8cb746a8-10-tiffanytrump.rsquare.w700.jpg"
  ];

  constructor(
    private roomService: RoomService,
    private planService: PlanService
  ) { }

  async ngOnInit(): Promise<void> {

    let data = await this.roomService.getRoomData();

    this.roomName = data.name;

    for (let question of data.plan.question) {
      if (!this.questionsGrouped[question.id]) {
        this.questionsGrouped[question.id] = [];
      }
      this.questionsGrouped[question.id].push(question);
    }

  }

  public goToNextQuestion(): void {
    this.questionCount++;
  }

  public goToPreviousQuestion(): void {
    this.questionCount--;
  }

  public getCurrentQuestion(): string {
    if (this.questionsGrouped[this.questionCount] != undefined) {
      return this.questionsGrouped[this.questionCount][0].description;
    }
    return "";
  }

  public getReplyList(): any[] {
    if (this.questionsGrouped[this.questionCount] != undefined) {
      console.log(this.questionsGrouped[this.questionCount][0].replies);
      return this.questionsGrouped[this.questionCount][0].replies;
    }
    return [];
  }

}
