import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Імпорт основного компонента App
import "./index.css"; // Імпорт глобальних стилів, якщо є

const root = ReactDOM.createRoot(document.getElementById("root")); // Знаходимо div з id="root"
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);