import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DisplayContextProvider from "./context/DisplayContextProvider.jsx";
import ThemeContextProvider from "./context/ThemeContextProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <DisplayContextProvider>
        <App />
      </DisplayContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
