import { Injectable } from '@angular/core';
import {RoomResponse} from "../../models/room-response";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  userHaveARoom: boolean = true;
  roomName: string;
  roomResponse: RoomResponse;

  constructor(
    private http: HttpClient
  ) { }

  public doesUserHaveARoom(): boolean {
    return this.userHaveARoom;
  }

  public async getRoomData(): Promise<any> {

    let data;
    let url = environment.service_url + "/api/room/questions";
    await firstValueFrom(this.http.get(url)).then(
      (a: any) => {
        data = a;
      }
    ).catch(
      a => {
        console.log(a);
      }
    )
    return data;

  }

}
