import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginRequest} from "../../models/login-request";
import {firstValueFrom} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn: boolean = false;
  user = {
    user_id: "",
    token: ""
  }
  constructor(
    private http: HttpClient
  ) { }

  public async login(
    username: string,
    password: string
  ) {

    const loginRequest: LoginRequest = {
      username: username,
      password: password
    }

    let url = environment.service_url + "/api/login";
    await firstValueFrom(this.http.post(url, loginRequest)).then(
      (a: any) => {
        this.user.user_id = a.user;
        this.user.token = a.token;
        console.log(this.getUserAuthToken());
        this.loggedIn = true;
      }
    ).catch(
      a => {
        this.loggedIn = false;
      }
    )

  }

  public getUserAuthToken(): string {
    return this.user.token;
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

}
