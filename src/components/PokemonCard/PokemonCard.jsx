import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MonCard = styled.div`
  background-color: white;
  box-shadow: 0px 0px 7px 0px rgb(77, 77, 77);
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
  background-color: #d90000;
  color: white;
  border: white;
  border-radius: 5px;
  padding: 7px 20px;
  margin-top: 10px;
  cursor: pointer;
`;

const PokemonCard = ({ addMypokeMon, isAdd, deleteMypokeMon, data }) => {
  const navigate = useNavigate();
  return (
    <MonCard
      key={data.id}
      // 이벤트 버블링 방지 (클릭한 행위가 버블링)
      onClick={(e) => {
        // console.log(e.target.contains);
        if (
          e.target.classList.contains("add-card-btn") ||
          e.target.classList.contains("remove-card-btn")
        ) {
          return;
        }

        {
          navigate("/detail");
        }
      }}
    >
      <MonImg src={data.img_url} />
      <BottomWrap>
        <MonName>{data.korean_name}</MonName>
        <p>No.{data.id}</p>
      </BottomWrap>
      {isAdd === true ? (
        <AddBtn
          className="add-card-btn"
          onClick={() => {
            addMypokeMon(data.id);
          }}
        >
          추가
        </AddBtn>
      ) : (
        <DeleteBtn
          className="remove-card-btn"
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
