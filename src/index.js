import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "@/component/GlobalStyle";
import { Provider } from "jotai";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <GlobalStyle>

      <Provider>
        <App />
      </Provider>
     
    </GlobalStyle>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
