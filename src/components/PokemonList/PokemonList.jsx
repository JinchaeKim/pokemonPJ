import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../../data/pokemonList";

// 리스트 전체
const BgMain = styled.div`
  width: auto;
  margin: 20px 90px;
  background-color: #aeb79e;
  /* background-image: url("https://i.namu.wiki/i/og8wF79k4GZrGDG6hkUl9si686oUjZCFIfa3qQb3EJVk4aWj4gK0YJiNjkF2_sSLewYRsI576AWQwy_HuGDl7Q.webp"); */
  padding: 30px;
  border-radius: 10px;
  border: 1px solid lightgray;
`;

const MonCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 28px;
  place-items: center;
`;

const MonCard = styled.div`
  background-color: white;
  box-shadow: 0px 0px 7px 0px rgb(193, 193, 193);
  border-radius: 10px;
  width: 170px;
  height: 250px;

  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: transform 0.3s ease;
    transform: translateY(-10px);
  }
`;

const BottomWrap = styled.div`
  padding: 10px;
`;

const MonImg = styled.img`
  margin-top: 15px;
`;

const MonName = styled.div`
  padding: 5px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const AddBtn = styled.button`
  background-color: #284f41;
  color: white;
  border: white;
  border-radius: 5px;
  padding: 7px 20px;
  margin-top: 10px;
`;

const PokemonList = () => {
  return (
    <BgMain>
      <MonCardContainer>
        {MOCK_DATA.map((data) => {
          return (
            <MonCard key={data.id}>
              <MonImg src={data.img_url} />
              <BottomWrap>
                <MonName>{data.korean_name}</MonName>
                <p>No.{data.id}</p>
              </BottomWrap>
              <AddBtn>추가</AddBtn>
            </MonCard>
          );
        })}
      </MonCardContainer>
    </BgMain>
  );
};

export default PokemonList;
