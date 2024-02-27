import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // Import the Store type from Redux

let subscriberCallback = () => {
  // debugger
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root"),
  );
};

subscriberCallback();
store.subscribe(() => {
  subscriberCallback();
});
