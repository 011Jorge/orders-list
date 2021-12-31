import React from "react";
import ReactDOM from "react-dom";

import Router from "./routes"

import GlobalStyles from "./GlobalStyles";


ReactDOM.render(
  <>
    <Router />
    <GlobalStyles />
  </>,
  document.getElementById("root")
);
