export interface RoomResponse {

  users: User[],


}

export interface User {

  username: string,
  repliesOfTheMonths: RepliesOfTheMonth[]

}

export interface RepliesOfTheMonth {
  month: number
  replyOfQuestions: ReplyOfQuestion
}

export interface ReplyOfQuestion {
  question_id: string,
  reply: string
}
