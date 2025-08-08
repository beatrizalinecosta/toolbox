// src/App.tsx
import React, { useState } from "react";
import {BrowserRouter as Router,Routes,Route,NavLink,useLocation,} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Button,Form,Navbar,Nav,Offcanvas,} from "react-bootstrap";

import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Stopwatch from "./pages/Stopwatch";
import Pomodoro from "./pages/Pomodoro";
import Converter from "./pages/Converter";
import LoremIpsum from "./pages/LoremIpsum";

const Sidebar = ({ toggleDarkMode, darkMode, show, handleClose }: any) => (
  <Offcanvas show={show} onHide={handleClose} placement="start" className={darkMode ? "bg-dark text-white" : "bg-white"}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>ToolBox App</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="/toolbox" onClick={handleClose} className="mb-3 text-black fw-bold bg-white border-black rounded">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/calculator" onClick={handleClose} className="mb-3 text-black fw-bold bg-white border-black rounded">Calculadora</Nav.Link>
        <Nav.Link as={NavLink} to="/stopwatch" onClick={handleClose} className="mb-3 text-black fw-bold bg-white border-black rounded">Stopwatch</Nav.Link>
        <Nav.Link as={NavLink} to="/pomodoro" onClick={handleClose} className="mb-3 text-black fw-bold bg-white border-black rounded">Pomodoro</Nav.Link>
        <Nav.Link as={NavLink} to="/converter" onClick={handleClose} className="mb-3 text-black fw-bold bg-white border-black rounded">Conversor</Nav.Link>
        <Nav.Link as={NavLink} to="/lorem" onClick={handleClose} className="mb-3 text-black fw-bold bg-white border-black rounded">Lorem Ipsum</Nav.Link>
        <Form.Check
          type="switch"
          id="dark-mode-switch"
          label="Modo Escuro"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="mt-3"
        />
      </Nav>
    </Offcanvas.Body>
  </Offcanvas>
);

const AppRoutes = ({ darkMode, toggleDarkMode }: any) => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);

  const isHome = location.pathname === "/toolbox";

  return (
    <div className={darkMode ? "bg-dark text-white min-vh-100" : "bg-light text-dark min-vh-100"}>
      {!isHome && (
        <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand={false} className="mb-3">
          <Container fluid>
            <Button variant={darkMode ? "outline-light" : "outline-dark"} onClick={() => setShowSidebar(true)}>
              ☰ Menu
            </Button>
          </Container>
        </Navbar>
      )}
      <Sidebar
        show={showSidebar}
        handleClose={() => setShowSidebar(false)}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <Container>
        <Routes>
          <Route path="/toolbox" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/lorem" element={<LoremIpsum />} />
        </Routes>
      </Container>
    </div>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <AppRoutes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </Router>
  );
};

export default App;
