import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter forceRefresh={true}>
      <App />
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
