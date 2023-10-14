import AnswerModel from "@/models/answer";

import styles from "@/styles/answer.module.css";

interface IProps {
  answer: AnswerModel;
  answerNumber: number;
  handleResponse: (answerIndex: number) => void;
}

export function Answer({ answer, answerNumber, handleResponse }: IProps) {
  const revealedAnswer = answer.revealed
    ? `${styles.flip} ${styles.flipBoxInner}`
    : "";

  const handleLetter = () => {
    switch (answerNumber) {
      case 0:
        return { letter: "A", color: "#F2C866" };
      case 1:
        return { letter: "B", color: "#F266BA" };
      case 2:
        return { letter: "C", color: "#85D4F2" };
      case 3:
        return { letter: "D", color: "#BCE596" };
    }
  };

  return (
    <div
      className={`${styles.answer} ${styles.flipBox}`}
      onClick={() => handleResponse(answerNumber)}
    >
      <div className={`${revealedAnswer}`}>
        <div className={`${styles.front} ${styles.flipBoxFront}`}>
          <h2 style={{ backgroundColor: handleLetter()?.color }}>
            {handleLetter()?.letter}
          </h2>
          <h3>{answer.value}</h3>
        </div>
        {answer.correctAnswer ? (
          <div className={`${styles.correct} ${styles.flipBoxBack}`}>
            <p>Resposta correta!</p>
            <h3>{answer.value}</h3>
          </div>
        ) : (
          <div className={`${styles.incorrect} ${styles.flipBoxBack}`}>
            <p>Resposta incorreta!</p>
            <h3>{answer.value}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
