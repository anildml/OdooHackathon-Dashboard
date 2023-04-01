import { Injectable } from '@angular/core';
import {RoomResponse} from "../../models/room-response";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private userHaveARoom: boolean = true;
  private roomName: string;
  private roomResponse: RoomResponse;

  constructor() { }

  public doesUserHaveARoom(): boolean {
    return this.userHaveARoom;
  }

}
