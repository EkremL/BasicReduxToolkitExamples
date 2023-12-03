import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//state yönetimi icin olusturulan store u ve kapsayıcı provideri import ettik artik tum state yönetimi app componentini kapsıycak sekilde gecerli oldu
import { store } from "./store.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
