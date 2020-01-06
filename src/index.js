import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./todoApp";

let mainPage = document.querySelector("#container");

ReactDOM.render (
  <div>
    <App/>
  </div>,
  mainPage
);