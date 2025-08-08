// src/pages/Calculator.tsx
import React, { useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    if (value === "C") setInput("");
    else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Erro");
      }
    } else setInput(input + value);
  };

  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
    ["C"]
  ];

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Calculadora</h2>
      <Card className="p-3 w-25 position-absolute top-50 start-50 translate-middle">
        <input className="form-control mb-3 text-end" value={input} readOnly />
        {buttons.map((row, i) => (
          <Row key={i} className="mb-2">
            {row.map((btn) => (
              <Col key={btn}>
                <Button variant="secondary" className="w-100" onClick={() => handleClick(btn)}>
                  {btn}
                </Button>
              </Col>
            ))}
          </Row>
        ))}
      </Card>
    </Container>
  );
};

export default Calculator;
