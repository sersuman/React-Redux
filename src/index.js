import React from "react";
import { render } from "react-dom";
import { Provider, provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";

render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById("root")
);