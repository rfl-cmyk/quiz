import QuestionModel from "@/models/question";
import { Counter } from "../counter/page";
import { Answer } from "../answer/page";

import styles from "@/styles/questionnaire.module.css";

interface IProps {
  nextQuestion: () => void;
  question: QuestionModel;
  handleResponse: (answerIndex: number) => void;
}

export function Questionnaire({
  nextQuestion,
  question,
  handleResponse,
}: IProps) {
  const renderAnswers = () => {
    if (question.answers) {
      return question.answers.map((item, index) => {
        return (
          <Answer
            key={index}
            answer={item}
            answerNumber={index}
            handleResponse={handleResponse}
          />
        );
      });
    }
  };

  return (
    <div className={styles.questionnaire}>
      <h1>{question.enunciation}</h1>
      <Counter key={question.id} nextQuestion={nextQuestion} />
      {renderAnswers()}
      <button onClick={() => nextQuestion()}>Próxima</button>
    </div>
  );
}
