import React, { useState } from "react";
import Router from "./shared/Router";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { PokemonProvider } from "./context/PokemonContext";

const GlobalStyle = createGlobalStyle`${reset}`;

const App = () => {
  return (
    <PokemonProvider>
      <GlobalStyle />
      <Router />
    </PokemonProvider>
  );
};

export default App;
