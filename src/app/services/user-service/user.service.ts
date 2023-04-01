import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginRequest} from "../../models/login-request";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn: boolean = true;
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

    let a = await firstValueFrom(this.http.post("url", loginRequest));

  }

  public getUserAuthToken(): string {
    return this.user.token;
  }

  public isLoggedId(): boolean {
    return this.isLoggedIn;
  }

}
