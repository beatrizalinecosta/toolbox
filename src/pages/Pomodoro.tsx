// src/pages/Pomodoro.tsx
import React, { useEffect, useState } from "react";
import { Button, Container, ButtonGroup } from "react-bootstrap";

const Pomodoro = () => {
  const [seconds, setSeconds] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<"work" | "break">("work");

  useEffect(() => {
    let timer: any;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((s) => {
  if (s <= 1) {
    setMode((prevMode) => {
      const nextMode = prevMode === "work" ? "break" : "work";
      setSeconds(nextMode === "work" ? 1500 : 300); // atualiza segundos de acordo com o novo modo
      return nextMode;
    });
    return 0; // retorna 0 para evitar continuar decrementando
  }
  return s - 1;
});

      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const format = (s: number) => `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  return (
    <Container className="text-center py-4">
      <h2>Pomodoro Timer</h2>
      <p>Modo atual: <strong>{mode === "work" ? "Trabalho" : "Descanso"}</strong></p>
      <h1 className="display-2 my-4">{format(seconds)}</h1>
      <ButtonGroup>
        <Button variant="success" onClick={() => setIsRunning(true)}>Iniciar</Button>
        <Button variant="warning" onClick={() => setIsRunning(false)}>Pausar</Button>
        <Button variant="danger" onClick={() => { setIsRunning(false); setSeconds(1500); setMode("work"); }}>Resetar</Button>
      </ButtonGroup>
    </Container>
  );
};

export default Pomodoro;
