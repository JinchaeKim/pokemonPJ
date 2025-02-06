import React, from "react";
import MOCK_DATA from "../data/pokemonList";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  DBtn,
  DetailBgImg,
  DetailCardContainer,
  DetailMain,
  DTitle,
  DType,
} from "../styles/StyledComponents";
import { PokemonContext } from "../context/PokemonContext";

const Detail = () => {
  // const { myMon, addMypokeMon, deleteMypokeMon } = useContext(PokemonContext);

  // mock_data 중에 내가 선택한 것
  const datas = MOCK_DATA;
  const navigate = useNavigate();

  //setSearchParams는 삭제하기!
  const [searchParams, setSearchParams] = useSearchParams();

  const getId = searchParams.get("id"); // queryString에서 id 값 가져오기
  console.log("getId", getId);

  // 배열 한 개만 꺼내오기 (map을 위해 filter 사용)
  const d_TargetCard = datas.filter((data) => {
    return data.id === Number(getId); // type 일치시키기
  });
  console.log("targetCard", d_TargetCard); // 클릭한 카드의 정보를 배열로 출력

  // const setSortParams = (e) => {
  //   searchParams.set("id", "1");
  //   setSearchParams(searchParams);
  // };

  // // detail의 id와 myMon의 아이디랑 같다면 true
  // const findD_Card = myMon.find((myMonEl) => {
  //   return myMonEl.id === d_TargetCard.id;
  // });

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
                Home
              </DBtn>
              {/* {findD_Card === true ? (
                <button
                  onClick={() => {
                    deleteMypokeMon(data.id);
                  }}
                >
                  삭제
                </button>
              ) : (
                <button
                  onClick={() => {
                    addMypokeMon(data.id);
                  }}
                >
                  추가
                </button>
              )} */}
            </div>
          );
        })}
      </DetailCardContainer>
    </DetailMain>
  );
};

export default Detail;
