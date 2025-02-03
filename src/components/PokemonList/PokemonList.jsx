import React from "react";
import styled from "styled-components";

const BgMain = styled.div`
  width: auto;
  margin: 30px;
  background-color: #dddddd;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid lightgray;
`;

const BgdImg = styled.img`
  opacity: 50%;
  width: 70%;
  display: flex;
  margin: auto;
`;

const PokemonList = () => {
  return (
    <>
      <BgMain>
        <BgdImg src="https://i.namu.wiki/i/og8wF79k4GZrGDG6hkUl9si686oUjZCFIfa3qQb3EJVk4aWj4gK0YJiNjkF2_sSLewYRsI576AWQwy_HuGDl7Q.webp" />
      </BgMain>
    </>
  );
};

export default PokemonList;
