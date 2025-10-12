import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const modal = useRef();

  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const isTimerActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    modal.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
  }

  function handleStop() {
    modal.current.open();
    clearInterval(timer.current);
  }

  function handleReset() {
    setRemainingTime(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={modal}
        targetTime={targetTime}
        remainingTime={remainingTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <button onClick={isTimerActive ? handleStop : handleStart}>
          {isTimerActive ? 'Stop' : 'Start'} Challenge
        </button>
        <p className={isTimerActive ? 'active' : ''}>
          {isTimerActive ? 'Timer is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
