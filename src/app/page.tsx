"use client";

import { useEffect, useState } from "react";

import { Questionnaire } from "@/components/questionnaire/page";
import QuestionModel from "@/models/question";
import { QuestionnaireApi } from "@/services/questionnaire-api";
import { QuestionsApi } from "@/services/questions-api";
import { useRouter } from "next/navigation";

import styles from "@/styles/homepage.module.css";

export default function Home() {
  const [start, setStart] = useState(false);
  const [refresh, setRefresh] = useState(Math.random());
  const router = useRouter();
  const [question, setQuestion] = useState<QuestionModel>();
  const [questions, setQuestions] = useState<QuestionModel[]>([]);
  const [questionsOrder, setQuestionsOrder] = useState<number[]>(
    [] as number[]
  );

  const getQuestionsOrder = async () => {
    const response = await QuestionnaireApi.getQuestionsOrder();
    setQuestionsOrder(response);
    getQuestion(response[0]);
  };

  const getQuestion = async (id: number) => {
    const response = await QuestionsApi.getQuestionById(id);
    setQuestion(response);
  };

  const nextQuestion = () => {
    if (question && questions.length < questionsOrder.length - 1) {
      questions.push(question);
      const questionNumber = questionsOrder[questions.length];
      getQuestion(questionNumber);
    } else {
      const correctAnswers = questions.filter((item) => item.isCorrect);
      router.push(`/result/${questionsOrder.length}/${correctAnswers.length}`);
    }
  };

  const handleResponse = (answerIndex: number) => {
    const anyRevealed = question.answers.filter((item) => item.revealed);

    if (anyRevealed.length === 0) {
      question.answers[answerIndex].revealed = true;

      if (question.answers[answerIndex].correctAnswer) {
        question.isCorrect = true;
      } else {
        const correctAnswer = question.answers.filter(
          (item) => item.correctAnswer
        );
        correctAnswer[0].revealed = true;
        question.isCorrect = false;
      }

      setRefresh(Math.random());
    }
  };

  useEffect(() => {
    getQuestionsOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={styles.main}>
      {refresh && question && start ? (
        <>
          <Questionnaire
            nextQuestion={nextQuestion}
            question={question}
            handleResponse={handleResponse}
          />
        </>
      ) : (
        <>
          <p>Você terá dez segundos para responder cada questão.</p>
          <h1>Are you ready?</h1>
          <button onClick={() => setStart(true)}>Começar</button>
        </>
      )}
    </main>
  );
}
