import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../../data/pokemonList";

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
  cursor: pointer;
`;

const PokemonCard = ({ setmypokeMon }) => {
  return (
    <MonCardContainer>
      {MOCK_DATA.map((data) => {
        return (
          <MonCard key={data.id}>
            <MonImg src={data.img_url} />
            <BottomWrap>
              <MonName>{data.korean_name}</MonName>
              <p>No.{data.id}</p>
            </BottomWrap>
            <AddBtn
              onClick={() => {
                setmypokeMon(data.id);
              }}
            >
              추가
            </AddBtn>
          </MonCard>
        );
      })}
    </MonCardContainer>
  );
};

export default PokemonCard;
