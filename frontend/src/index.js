import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import "./index.css";
import configureStore from "./store";
import axios from "axios";

const store = configureStore();

axios.interceptors.request.use(function (config) {
    let storageUser = JSON.parse(localStorage.getItem("user"));
    if(storageUser === null) {
        return config;
    }
    let token = storageUser.token;
    if(token === null) {
        return config;
    } else {
        config.headers.Authorization = token;
        return config;
    }
});

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
