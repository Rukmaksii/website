import ReactDOM from "react-dom";
import React from "react";

import App from "./App/App"

import "./style.scss";

const root = document.querySelector("#root");

console.log(process.env)

ReactDOM.render(<App />, root);
