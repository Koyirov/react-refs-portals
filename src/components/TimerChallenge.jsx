import { useState, useRef } from 'react';
import ResultModal from "./ResultModal.jsx";

function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            if(dialog.current) {
                dialog.current.showModal();
            }
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    const handleStop = () => {
        clearTimeout(timer.current)
    }

    return (
        <>
            {timerExpired && <ResultModal targetTime={targetTime} result={"Lost"} ref={dialog}/>}
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop Challenge' : 'Start Challenge'}
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}

export default TimerChallenge;