// src/pages/Converter.tsx
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Converter = () => {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");

  const binToDec = () => {
    try {
      const dec = parseInt(binary, 2);
      setDecimal(dec.toString());
    } catch {
      setDecimal("Erro");
    }
  };

  const decToBin = () => {
    try {
      const bin = parseInt(decimal, 10).toString(2);
      setBinary(bin);
    } catch {
      setBinary("Erro");
    }
  };

  return (
    <Container className="py-4 row">
      <h2 className="text-center mb-4">Conversor Binário/Decimal</h2>
      <Form.Group className="mb-3 col">
        <Form.Label>Binário para Decimal</Form.Label>
        <Form.Control value={binary} onChange={(e) => setBinary(e.target.value)} />
        <Button className="btn btn-lg btn-light fw-bold border-black bg-white mt-2" onClick={binToDec}>Converter</Button>
        <Form.Text className="m-3 badge text-bg-primary align-middle text-wrap">Resultado: {decimal}</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 col">
        <Form.Label>Decimal para Binário</Form.Label>
        <Form.Control value={decimal} onChange={(e) => setDecimal(e.target.value)} />
        <Button className="btn btn-lg btn-light fw-bold border-black bg-white mt-2" onClick={decToBin}>Converter</Button>
        <Form.Text className="m-3 badge text-bg-primary align-middle text-wrap">Resultado: {binary}</Form.Text>
      </Form.Group>
    </Container>
  );
};

export default Converter;
