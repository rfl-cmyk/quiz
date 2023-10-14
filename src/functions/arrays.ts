import AnswerModel from "@/models/answer";

export function shuffle(elements: any[]): any[] {
  return elements
    .map((value) => ({ value, random: Math.random() }))
    .sort((firstValue, secondValue) => firstValue.random - secondValue.random)
    .map((item) => item.value);
}
