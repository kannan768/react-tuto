// CountdownTimer.jsx
import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  // 🎯 Set your target date here
  const targetDate = new Date("2025-07-15T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, [targetDate]);

  return (
    <div className="text-center mt-10 text-2xl font-semibold">
      <h2 className="mb-4 text-3xl font-bold">Countdown Timer</h2>
      <div className="flex justify-center gap-4">
        <div>{timeLeft.days ?? "--"}d</div>
        <div>{timeLeft.hours ?? "--"}h</div>
        <div>{timeLeft.minutes ?? "--"}m</div>
        <div>{timeLeft.seconds ?? "--"}s</div>
      </div>
    </div>
  );
}
