import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PlanResponse} from "../../models/plan-response";
import {firstValueFrom} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  userHaveQuestionsToAnswer: boolean = true;
  // planResponse: PlanResponse = {
  //   plan: {
  //
  //   }
  // }

  constructor(
    private http: HttpClient
  ) { }

  public async getQuestionList(): Promise<any> {
    let data;
    let url = environment.service_url + "/api/plans";
    await firstValueFrom(this.http.get(url)).then(
      (a: any) => {
        data = a;
      }
    ).catch(
      (a: any) => {
        console.log(a);
      }
    );
    return data;
  }

  public doesUserHaveQuestionsToAnswer(): boolean {
    return this.userHaveQuestionsToAnswer;
  }

}
