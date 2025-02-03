import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../../data/pokemonList";

const BgMain = styled.div`
  width: auto;
  margin: 20px 90px;
  background-color: #dddddd;
  /* background-image: url("https://i.namu.wiki/i/og8wF79k4GZrGDG6hkUl9si686oUjZCFIfa3qQb3EJVk4aWj4gK0YJiNjkF2_sSLewYRsI576AWQwy_HuGDl7Q.webp"); */
  padding: 30px;
  border-radius: 10px;
  border: 1px solid lightgray;
`;

const PokemonList = () => {
  return (
    <>
      <BgMain>
        {MOCK_DATA.map((data) => {
          return (
            <div key={data.id}>
              <img src={data.img_url} />
              <div>{data.korean_name}</div>
              <p>{data.description}</p>
              <p></p>
              <button>추가</button>
            </div>
          );
        })}
      </BgMain>
    </>
  );
};

export default PokemonList;
