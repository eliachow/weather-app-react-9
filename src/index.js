import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Card from "./Card";
import Footer from "./Footer";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Card />
    <Footer />
  </StrictMode>
);
