import { Injectable } from '@angular/core';
import {RoomResponse} from "../../models/room-response";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  userHaveARoom: boolean = true;
  roomName: string;
  roomResponse: RoomResponse;

  constructor() { }

  public doesUserHaveARoom(): boolean {
    return this.userHaveARoom;
  }

}
