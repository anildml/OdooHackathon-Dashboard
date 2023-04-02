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
      return this.questionsGrouped[this.questionCount][0].replies;
    }
    return [];
  }

}
