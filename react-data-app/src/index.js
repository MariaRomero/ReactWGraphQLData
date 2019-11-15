import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { dataObj } from "./ApolloService";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";

const client = new ApolloClient(dataObj());

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
