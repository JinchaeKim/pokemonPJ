import React, { useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import PokemonList from "../components/PokemonList/PokemonList";
import MOCK_DATA from "../data/pokemonList";

const Dex = () => {
  return (
    <>
      <Dashboard />
      <PokemonList />
    </>
  );
};

export default Dex;
