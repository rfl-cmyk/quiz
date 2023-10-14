import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "@/styles/counter.module.css";

interface IProps {
  nextQuestion: () => void;
}

export function Counter({ nextQuestion }: IProps) {
  return (
    <div className={styles.counter}>
      <CountdownCircleTimer
        duration={10}
        size={80}
        isPlaying
        onComplete={nextQuestion}
        colors={["#BCE596", "#F7B801", "#ED827A", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
