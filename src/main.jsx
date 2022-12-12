import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ContextProvider from "../src/context/UseContext";
import { Provider } from "react-redux";
import store from "./store/store";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
