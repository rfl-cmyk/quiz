const baseURL = process.env.NEXT_PUBLIC_DB_LOCAL_HOST;

class QuestionnaireApi {
  static async getQuestionsOrder(): Promise<number[]> {
    const response = await fetch(`${baseURL}/questionnaire`);
    const result = await response.json();
    return result;
  }
}

export { QuestionnaireApi };
