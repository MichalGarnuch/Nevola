import React, { useState, useEffect } from 'react';

export const Timer = () => {
    const [startTime, setStartTime] = useState<number | null>(null);
    const [isOverEightHours, setIsOverEightHours] = useState(false);

    const monthlySalary = 20000; // Miesiêczne wynagrodzenie netto
    const monthlyHours = 168; // Liczba godzin pracy w miesi¹cu

    // Zarobek na sekundê
    const salaryPerSecond = monthlySalary / (monthlyHours * 60 * 60);

    useEffect(() => {
        const savedStartTime = localStorage.getItem('startTime');
        if (savedStartTime) {
            setStartTime(Number(savedStartTime));
        } else {
            const now = Date.now();
            setStartTime(now);
            localStorage.setItem('startTime', String(now));
        }
    }, []);

    const seconds = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;

    if (seconds >= 8 * 60 * 60) {
        setIsOverEightHours(true);
    }

    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');

    // Oblicz zarobek
    const earnings = (salaryPerSecond * seconds).toFixed(2);

    return (
        <div style={{ color: isOverEightHours ? 'red' : 'white', fontSize: '2em' }}>
            <h2>Pracujesz od:</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>{hours}:{minutes}:{remainingSeconds}</div>
                <div>{earnings} zl</div>
            </div>
        </div>
    );
};

export default Timer;
