import React from "react";
import MOCK_DATA from "../data/pokemonList";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  D_AddBtn,
  D_DelteBtn,
  DBtn,
  DetailBgImg,
  DetailCardContainer,
  DetailMain,
  DTitle,
  DType,
} from "../styles/StyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, deletePokemon } from "../redux/slices/setMyPokemonSlice";

const Detail = () => {
  const myMon = useSelector((a) => {
    return a.setMyPokemon;
  });
  const dispatch = useDispatch();
  // mock_data 중에 내가 선택한 것
  const datas = MOCK_DATA;
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const getId = searchParams.get("id"); // queryString에서 id 값 가져오기
  console.log("getId", getId);

  // 배열 한 개만 꺼내오기 (map을 위해 filter 사용)
  const d_TargetCard = datas.filter((data) => {
    return data.id === Number(getId); // type 일치시키기
  });
  console.log("targetCard", d_TargetCard); // 클릭한 카드의 정보를 배열로 출력

  // d_TargetCard는 배열, myMon도 배열 => 두 배열의 교집합 찾기
  // 추가 <-> 삭제 버튼
  const findD_Card = myMon.some((a) => d_TargetCard.includes(a));
  console.log("myMon", myMon);

  return (
    <DetailMain>
      <DetailBgImg src="https://e1.pxfuel.com/desktop-wallpaper/302/432/desktop-wallpaper-pokemon-scenery-pokemon-landscape.jpg" />
      <DetailCardContainer>
        {d_TargetCard.map((data) => {
          return (
            <div key={data.id}>
              <img src={data.img_url} />
              <div>
                <DTitle>{data.korean_name}</DTitle>
                <DType>Type : {data.types}</DType>
                <div>{data.description}</div>
              </div>
              <DBtn
                onClick={() => {
                  {
                    navigate("/dex");
                  }
                }}
              >
                뒤로가기
              </DBtn>
              {findD_Card === true ? (
                <D_DelteBtn
                  onClick={() => {
                    dispatch(deletePokemon(data));
                  }}
                >
                  삭제
                </D_DelteBtn>
              ) : (
                <D_AddBtn
                  onClick={() => {
                    dispatch(addPokemon(data));
                  }}
                >
                  추가
                </D_AddBtn>
              )}
            </div>
          );
        })}
      </DetailCardContainer>
    </DetailMain>
  );
};

export default Detail;
