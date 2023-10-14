import { NextResponse } from "next/server";
import questions from "../../questionsData";

export function GET(request: Request, { params }: { params: { id: number } }) {
  const uniqueQuestion = questions.filter((item) => item.id == params.id);

  if (uniqueQuestion.length == 1) {
    const selectedQuestion = uniqueQuestion[0].shuffleAnswers();
    return NextResponse.json(selectedQuestion.convertToObject(), {
      status: 200,
    });
  } else {
    return NextResponse.json("Questão não encontrada!", {
      status: 202,
    });
  }
}
