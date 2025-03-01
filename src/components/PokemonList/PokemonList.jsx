import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard.jsx";
import MOCK_DATA from "../../data/pokemonList.js";
import { BgMain, MonCardContainer } from "../../styles/StyledComponents.jsx";

const PokemonList = () => {
  return (
    <BgMain>
      <MonCardContainer>
        {MOCK_DATA.map((data) => {
          return (
            <PokemonCard
              key={data.id}
              isAdd={true} // 리스트에 있을 때 참
              data={data}
            />
          );
        })}
      </MonCardContainer>
    </BgMain>
  );
};

export default PokemonList;
