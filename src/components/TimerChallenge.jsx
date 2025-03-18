import { useState, useRef } from 'react';

function TimerChallenge({ title, targetTime }) {

    const timer = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    const handleStop = () => {
        clearTimeout(timer.current)
        setTimerStarted(false);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && (<p>You lost!</p>)}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop Challenge' : 'Start Challenge'}
                </button>
            </p>
            <p className={timerExpired ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    )
}

export default TimerChallenge;