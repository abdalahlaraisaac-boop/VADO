import React from "react";
import { createRoot } from "react-dom/client";
import VadoLanding from "./components/VadoLanding";
import "./components/VadoLanding.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VadoLanding />
  </React.StrictMode>
);
