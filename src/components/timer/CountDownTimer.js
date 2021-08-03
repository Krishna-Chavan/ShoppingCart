import React, { useState, useEffect, useRef } from 'react'
import './Countdown.css'

export default function CountDownTimer() {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('Aug 18 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / (1000));

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000);
    }
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })

    return (
        <div className="container timer">
            <div>
                <section>
                    <p>{days}<small>d</small></p>
                    {/* <p><small>H</small></p> */}
                </section>
                <span>:</span>
                <section>
                    <p>{hours}<small>h</small></p>
                    {/* <p><small>H</small></p> */}
                </section>
                <span>:</span>
                <section>
                    <p>{minutes}<small>m</small></p>
                    {/* <p><small>M</small></p> */}
                </section>
                <span>:</span>
                <section>
                    <p>{seconds}<small>s</small></p>
                    {/* <p><small>S</small></p> */}
                </section>
            </div>
        </div>
    )
}
