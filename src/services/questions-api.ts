import QuestionModel from "@/models/question";

const baseURL = process.env.NEXT_PUBLIC_DB_LOCAL_HOST;

class QuestionsApi {
  static async getQuestionById(id: number): Promise<QuestionModel> {
    const response = await fetch(`${baseURL}/questions/${id}`);
    const result = await response.json();
    return result;
  }
}

export { QuestionsApi };
