import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import "./style/index.scss";

createRoot(document.getElementById("root")).render(<App />);
