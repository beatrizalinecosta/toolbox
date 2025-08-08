// src/pages/LoremIpsum.tsx
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const LoremIpsum = () => {
  const [paragraphs, setParagraphs] = useState(1);
  const [text, setText] = useState("");

  const generateLorem = () => {
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
    setText(Array(paragraphs).fill(lorem).join("\n\n"));
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Gerador de Lorem Ipsum</h2>
      <Form.Group className="mb-3">
        <Form.Label>Número de parágrafos:</Form.Label>
        <Form.Control
          type="number"
          value={paragraphs}
          onChange={(e) => setParagraphs(Number(e.target.value))}
          min={1}
        />
      </Form.Group>
      <Button className="btn btn-lg btn-light fw-bold border-black bg-white m-2" onClick={generateLorem}>Gerar</Button>
      <Form.Control as="textarea" rows={paragraphs * 2} className="mt-3" value={text} readOnly />
    </Container>
  );
};

export default LoremIpsum;
