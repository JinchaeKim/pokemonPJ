import React from "react";
import styled from "styled-components";

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

const DeleteBtn = styled.button`
  background-color: #ff0000;
  color: white;
  border: white;
  border-radius: 5px;
  padding: 7px 20px;
  margin-top: 10px;
  cursor: pointer;
`;

const PokemonCard = ({ addMypokeMon, isAdd, deleteMypokeMon, data }) => {
  return (
    <MonCard key={data.id}>
      <MonImg src={data.img_url} />
      <BottomWrap>
        <MonName>{data.korean_name}</MonName>
        <p>No.{data.id}</p>
      </BottomWrap>
      {isAdd === true ? (
        <AddBtn
          onClick={() => {
            addMypokeMon(data.id);
          }}
        >
          추가
        </AddBtn>
      ) : (
        <DeleteBtn
          onClick={() => {
            deleteMypokeMon(data.id);
          }}
        >
          삭제
        </DeleteBtn>
      )}
    </MonCard>
  );
};

export default PokemonCard;
