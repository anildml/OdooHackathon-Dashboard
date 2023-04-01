import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginRequest} from "../../models/login-request";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLoggedIn: boolean = false;
  private user = {
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

    const headers = new HttpHeaders({
      "token": ""
    });
    const options = {
      headers: headers
    }

    const loginRequest: LoginRequest = {
      username: username,
      password: password
    }

    const body = {

    };

    let a = await firstValueFrom(this.http.post("url", body));

  }

  public getUserAuthToken(): string {
    return this.user.token;
  }

  public isLoggedId(): boolean {
    return this.isLoggedIn;
  }

}
