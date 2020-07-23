import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import App from "./App";
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <ToastContainer
      autoClose={3000}
      hideProgressBar={true}
      position="bottom-right"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
