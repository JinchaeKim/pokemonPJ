import React, { useState } from "react";
import Router from "./shared/Router";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`${reset}`;

const App = () => {
  const defaultMon = { id: 1, name: "", number: 0 };

  const [pokemon, setPokemon] = useState(defaultMon);
  const [pokemonList, setPokemonList] = useState([]);
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
