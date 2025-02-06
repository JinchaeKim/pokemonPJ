import React from "react";
import Router from "./shared/Router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Provider } from "react-redux";
import { store } from "./redux/config/store";
import { ToastContainer, toast } from "react-toastify";

const GlobalStyle = createGlobalStyle`${reset}`;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ToastContainer />
      <Router />
    </Provider>
  );
};

export default App;
