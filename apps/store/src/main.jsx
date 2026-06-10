import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import App from "./App.jsx";
import "./index.css";
import { StoreProvider } from "./context/StoreContext.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ScrollToTop />
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);