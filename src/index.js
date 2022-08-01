import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import Store, { history } from "./redux/store";
import App from "./App";

import "./styles.css";

ReactDOM.render(
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
document.getElementById("root")
);
