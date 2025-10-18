import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import Bootstrap CSS & JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/">🏠 Home</Link>
        <Link to="/about">ℹ️ About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Halo Home</h1>} />
        <Route path="/about" element={<h1>Halo about</h1>} />
      </Routes>
    </Router>
  </StrictMode>
);
