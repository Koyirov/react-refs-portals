import { useState, useRef } from 'react';
import ResultModal from "./ResultModal.jsx";

function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimerRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0) {
        dialog.current.open();
        clearInterval(timer.current);
    }

    const handleReset = () => {
        setTimerRemaining(targetTime * 1000);
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimerRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
        }, 10);
    }

    const handleStop = () => {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal
                targetTime={targetTime}
                ref={dialog}
                remainingTime={timeRemaining}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'}
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}

export default TimerChallenge;