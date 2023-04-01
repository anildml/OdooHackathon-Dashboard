export interface PlanResponse {

  plan: Plan

}

export interface Plan {

  name: string,
  month: number,
  has_replied: boolean,
  question: string[]

}


