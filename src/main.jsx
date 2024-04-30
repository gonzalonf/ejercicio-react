import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const ModalContext = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalContext.Provider value={true}>
      <App />
    </ModalContext.Provider>
  </React.StrictMode>
);
