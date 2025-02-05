import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  AddBtn,
  BottomWrap,
  DeleteBtn,
  MonCard,
  MonImg,
  MonName,
} from "../../styles/StyledComponents";
import { PokemonContext } from "../../context/PokemonContext";

const PokemonCard = () => {
  const { addMypokeMon, isAdd, deleteMypokeMon, data } =
    useContext(PokemonContext);
  console.log("data", data);
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
          // key에서 힌트 얻음
          navigate(`/detail?id=${data.id}`);
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
