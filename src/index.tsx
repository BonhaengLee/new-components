import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import App from "./ClassApp";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// font 및 베이스 스타일과 reset을 적용하기 위한 CSS
import "./styles/globals.scss";
import "./styles/reset.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
