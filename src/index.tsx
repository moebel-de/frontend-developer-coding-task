import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './App.css';
import Fonts from './Fonts/fonts'; // TODO Make the fonts to be loaded only once at start

ReactDOM.render(
  <React.StrictMode>
    <Fonts />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
