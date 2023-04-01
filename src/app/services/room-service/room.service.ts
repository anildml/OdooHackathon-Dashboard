import { Injectable } from '@angular/core';
import {RoomResponse} from "../../models/room-response";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private userHaveARoom: boolean = false;
  private roomName: string;
  private roomResponse: RoomResponse;

  constructor() { }

  private doesUserHaveARoom(): boolean {
    return this.userHaveARoom;
  }

}
