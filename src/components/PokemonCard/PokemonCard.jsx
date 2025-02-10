import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AddBtn,
  BottomWrap,
  DeleteBtn,
  MonCard,
  MonImg,
  MonName,
} from "../../styles/StyledComponents";
import { useDispatch } from "react-redux";
import {
  addPokemon,
  deletePokemon,
} from "../../redux/slices/setMyPokemonSlice";

const PokemonCard = ({ isAdd, data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <MonCard
      key={data.id}
      onClick={(e) => {
        // 이벤트 버블링 방지 (클릭한 행위가 버블링)
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
      {/* 카드의 버튼 추가<->삭제 감지 로직 */}
      {isAdd === true ? (
        <AddBtn
          className="add-card-btn"
          onClick={() => {
            dispatch(addPokemon(data));
          }}
        >
          추가
        </AddBtn>
      ) : (
        <DeleteBtn
          className="remove-card-btn"
          onClick={() => {
            dispatch(deletePokemon(data));
          }}
        >
          삭제
        </DeleteBtn>
      )}
    </MonCard>
  );
};

export default PokemonCard;
