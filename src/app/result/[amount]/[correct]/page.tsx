import Link from "next/link";

import styles from "@/styles/result.module.css";

export default function Result({
  params,
}: {
  params: { amount: number; correct: number };
}) {
  let bgColor = "";
  const percentage = (params.correct * 100) / params.amount;

  if (percentage < 50) {
    bgColor = "#e14a28";
  } else if (percentage >= 50 && percentage < 75) {
    bgColor = "orange";
  } else bgColor = "#3bbf5b";

  return (
    <div className={styles.result}>
      <h1>Resultado final</h1>
      <div className={styles.balloons}>
        <div className={styles.first}>
          <h2>{params.amount}</h2>
          <p>Perguntas</p>
        </div>
        <div className={styles.second}>
          <h2>{params.correct}</h2>
          <p>Corretas</p>
        </div>
        <div className={styles.third}>
          <h2 style={{ backgroundColor: `${bgColor}` }}>{percentage}%</h2>
          <p>Percentual</p>
        </div>
      </div>
      <Link href="/">
        <button>Recomeçar</button>
      </Link>
    </div>
  );
}
