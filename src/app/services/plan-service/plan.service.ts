import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PlanResponse} from "../../models/plan-response";

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  userHaveQuestionsToAnswer: boolean = true;
  planResponse: PlanResponse;

  constructor(
    private http: HttpClient
  ) { }

  public getQuestionList(): String[] {
    return [];
  }

  public doesUserHaveQuestionsToAnswer(): boolean {
    return this.userHaveQuestionsToAnswer;
  }

}
