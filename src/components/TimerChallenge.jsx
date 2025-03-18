import { useState } from 'react';

function TimerChallenge({ title, targetTime }) {

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const handleStart = () => {
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    const handleStop = () => {
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && (<p>You lost!</p>)}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>
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