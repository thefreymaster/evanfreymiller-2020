import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as Context from "./Context";
import "react-awesome-button/dist/themes/theme-one.css";
import * as ScreenSizeContext from "./services/ScreenSizeProvider";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <ScreenSizeContext.Provider>
        <Context.Provider>
          <App />
        </Context.Provider>
      </ScreenSizeContext.Provider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
