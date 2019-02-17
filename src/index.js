import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-virtualized/styles.css";
import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Routes />, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Keep this here
// https://www.randomlists.com/phone-numbers?qty=1000&dup=false
