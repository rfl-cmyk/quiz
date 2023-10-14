import { shuffle } from "@/functions/arrays";
import AnswerModel from "./answer";

export default class QuestionModel {
  #id: number;
  #enunciation: string;
  #answers: AnswerModel[];
  #isCorrect: boolean;

  constructor(
    id: number,
    enunciation: string,
    answers: AnswerModel[],
    isCorrect: boolean
  ) {
    this.#id = id;
    this.#enunciation = enunciation;
    this.#answers = answers;
    this.#isCorrect = isCorrect;
  }

  get id() {
    return this.#id;
  }

  get enunciation() {
    return this.#enunciation;
  }

  get answers() {
    return this.#answers;
  }

  get isCorrect() {
    return this.#isCorrect;
  }

  set isCorrect(value: boolean) {
    this.#isCorrect = value;
  }

  get answered() {
    for (const answer of this.#answers) {
      if (answer.revealed) return true;
    }

    return false;
  }

  shuffleAnswers(): QuestionModel {
    const shuffledAnswers = shuffle(this.#answers);
    return new QuestionModel(
      this.#id,
      this.#enunciation,
      shuffledAnswers,
      false
    );
  }

  static createFromObject(obj: QuestionModel): QuestionModel {
    const answers = obj.#answers.map((resp) =>
      AnswerModel.createFromObject(resp)
    );
    return new QuestionModel(obj.id, obj.enunciation, answers, false);
  }

  convertToObject() {
    return {
      id: this.#id,
      enunciation: this.#enunciation,
      answers: this.#answers.map((resp) => resp.convertToObject()),
      isCorrect: false,
    };
  }
}
