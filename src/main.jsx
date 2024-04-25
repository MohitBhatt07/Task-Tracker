import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import { TaskContext, TaskProvider } from "./context/TaskContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <ToastContainer autoClose={1000} draggable />

      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
