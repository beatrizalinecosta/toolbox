// src/pages/Stopwatch.tsx
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: any;
    if (running) {
      interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60).toString().padStart(2, "0");
    const secs = (s % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <Container className="text-center py-4">
      <h2>Stopwatch</h2>
      <h1 className="display-3 my-4">{formatTime(time)}</h1>
      <Button variant="success" className="me-2" onClick={() => setRunning(true)}>Start</Button>
      <Button variant="warning" className="me-2" onClick={() => setRunning(false)}>Pause</Button>
      <Button variant="danger" onClick={() => { setTime(0); setRunning(false); }}>Reset</Button>
    </Container>
  );
};

export default Stopwatch;
