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
    user_id: "2",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODAzODA2MDIsImV4cCI6MTY4MDM5NTYwMiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlcjMifQ.jUKO5UpWCbd0f6wUc9B4OkJR3VCfVM3E7NYgZy45hqDb-eZVaUeTQ16_7m8AvFV8tQdjHp7SPn15aV-SIl7iElWRUmI_atLrhaeZNLAo82Qiv-tYVfe4XznP8OEIPBBLTf4eVc2124ha7kTlD2b0a7XuzSdGSeEOIASunE5eJE1o_CumpxmfBt-5ro65eUSssufwfkHw0rlR-OEX1RacxXu95sEVeB9rh5i6n_m3v_1XYkrlaw1OErpL2Fs9gpV6WirbVM5FWEA0z8obDhC1XGHs3chZnP-uVxgrruQ8tmf0ES5pym1FqwolgDvnQR10vf2iH5Ih6LIi-6yL24lZfw"
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
