import React from "react";
import styled from "styled-components";
import PokemonCard from "../PokemonCard/PokemonCard.jsx";

const BgMain = styled.div`
  width: auto;
  margin: 20px 90px;
  background-color: #aeb79e;
  /* background-image: url("https://i.namu.wiki/i/og8wF79k4GZrGDG6hkUl9si686oUjZCFIfa3qQb3EJVk4aWj4gK0YJiNjkF2_sSLewYRsI576AWQwy_HuGDl7Q.webp"); */
  padding: 30px;
  border-radius: 10px;
  border: 1px solid lightgray;
`;

const PokemonList = ({ addMypokeMon }) => {
  return (
    <BgMain>
      <PokemonCard addMypokeMon={addMypokeMon} isAdd={true} />
    </BgMain>
  );
};

export default PokemonList;
