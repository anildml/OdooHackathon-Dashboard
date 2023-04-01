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
  question: string;
  replies: any[];
  repliesGrouped: any = {};
  monthCount = 1;

  constructor(
    private roomService: RoomService,
    private planService: PlanService
  ) { }

  async ngOnInit(): Promise<void> {

    let data = await this.roomService.getRoomData();

    this.roomName = data.name;
    let question = data.plan.question[0];
    this.question = question.description;

    this.replies = question.replies;

    for (let reply of this.replies) {
      if (!this.repliesGrouped[reply.monthCount]) {
        this.repliesGrouped[reply.monthCount] = [];
      }
      this.repliesGrouped[reply.monthCount].push(reply);
    }


  }

  public goToNextQuestion(): void {
    this.monthCount++;
  }

}
