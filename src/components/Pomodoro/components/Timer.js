import React from 'react';
import useClockify from '../clockify';
import { useGlobalContext } from '../context';

export default function Timer() {
    const { timerLabel } = useGlobalContext();
    const clockifiedValue = useClockify();
    return (
        <div className="timer" style={{ color: "white" }}>
            <div className="timer-wrapper">
                <div id="timer-label">{timerLabel}</div>
                <div id="time-left">{clockifiedValue}</div>
            </div>
        </div>
    )
}