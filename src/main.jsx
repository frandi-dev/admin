import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import Bootstrap CSS & JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import Layout from "./components/Layout";
import Room from "./pages/Room";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Room />} />
          <Route path="/users" element={<h1>Halo User</h1>} />
          <Route path="/settings" element={<h1>Halo Settings</h1>} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
