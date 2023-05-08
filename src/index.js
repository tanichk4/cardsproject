import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CardsProvider from "./context/CardsContext";
import { BrowserRouter as Router } from "react-router-dom";
import RouterApp from "./pages/RouterApp";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CardsProvider>
      <Router>
        <RouterApp />
      </Router>
    </CardsProvider>
  </React.StrictMode>
);
