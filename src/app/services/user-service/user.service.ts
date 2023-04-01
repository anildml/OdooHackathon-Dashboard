import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginRequest} from "../../models/login-request";
import {firstValueFrom} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn: boolean = true;
  user = {
    user_id: "3",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODAzODE3NTEsImV4cCI6MTY4MDM5Njc1MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlcjMifQ.cJrszA6Mrdb5wqw4IcYOLBFw4AicA9Eo2E2qi8CMkJTmfvbtrazoShvv0n8gGEsZfezdcMHwq3c1oeR1bh2uW2rNN__RgFnltOQ2v1Z5WYGdX7ZrPV4W3EmOX1H6dIN86nS3LbEdEyC0aNho2TqU0JAAjrOenlZozxmwCeXJztD9mHvA8GQDTdFXZNygWIaYquemeH01XwoKvHIEDIg5PeOQebKnCcWwPzhd6bpuFP2GKlymTCxhQ7JRzL-5znEXT-3a6ZYtQIlFCqeZcP9Aoaf8nrPWqPe-h_CNSOAyXjLv3qyTaaaOW2oUan8CZ1o1sfrsjMiT5E0Hzccblwnv1A"
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
