import { NextResponse } from "next/server";

import questions from "../questionsData";
import { shuffle } from "@/functions/arrays";

export function GET() {
  const ids = questions.map((item) => item.id);
  return NextResponse.json(shuffle(ids));
}
