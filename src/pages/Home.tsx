// src/pages/Home.tsx
import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="text-center py-5 position-absolute top-50 start-50 translate-middle">
      <h1 className="mb-4">Bem-vindo ao ToolBox App</h1>
      <p className="lead">Um conjunto de ferramentas úteis para o seu dia a dia.</p>
      <Link to="/calculator">
        <Button className="btn btn-lg btn-light fw-bold border-black bg-white m-2">Calculadora</Button>
      </Link>
      <Link to="/stopwatch">
        <Button variant="primary" className="btn btn-lg btn-light fw-bold border-black bg-white m-2">Stopwatch</Button>
      </Link>
      <Link to="/pomodoro">
        <Button variant="primary" className="btn btn-lg btn-light fw-bold border-black bg-white m-2">Pomodoro</Button>
      </Link>
      <Link to="/converter">
        <Button variant="primary" className="btn btn-lg btn-light fw-bold border-black bg-white m-2">Conversor</Button>
      </Link>
      <Link to="/lorem">
        <Button variant="primary" className="btn btn-lg btn-light fw-bold border-black bg-white m-2">Lorem Ipsum</Button>
      </Link>
    </Container>
  );
};

export default Home;

/**
 * <Container className="text-center py-5">
      <h1 className="mb-4">Bem-vindo ao ToolBox App</h1>
      <p className="mb-4">Um conjunto de ferramentas úteis para o seu dia a dia.</p>
      <Link to="/calculator">
        <Button variant="primary" className="m-2">Calculadora</Button>
      </Link>
      <Link to="/stopwatch">
        <Button variant="primary" className="m-2">Stopwatch</Button>
      </Link>
      <Link to="/pomodoro">
        <Button variant="primary" className="m-2">Pomodoro</Button>
      </Link>
      <Link to="/converter">
        <Button variant="primary" className="m-2">Conversor</Button>
      </Link>
      <Link to="/lorem">
        <Button variant="primary" className="m-2">Lorem Ipsum</Button>
      </Link>
    </Container>
 */