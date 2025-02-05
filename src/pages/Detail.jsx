import React from "react";
import MOCK_DATA from "../data/pokemonList";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Detail = () => {
  // mock_data 중에 내가 선택한 것
  const datas = MOCK_DATA;
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const getId = searchParams.get("id"); // queryString에서 id 값 가져오기
  console.log("getId", getId);

  // 배열 한 개만 꺼내오기 (map을 위해 filter 사용)
  const targetCard = datas.filter((data) => {
    return data.id === Number(getId); // type 일치시키기
  });
  console.log("targetCard", targetCard); // 클릭한 카드의 정보를 배열로 출력

  // const setSortParams = (e) => {
  //   searchParams.set("id", "1");
  //   setSearchParams(searchParams);
  // };

  return (
    <div>
      {targetCard.map((data) => {
        return (
          <div key={data.id}>
            <img src={data.img_url} />
            <div>{data.korean_name}</div>
            <div>Type : {data.types}</div>
            <div>{data.description}</div>
            <Link to={`/detail/${data.id}`}>go</Link>
            <button
              onClick={() => {
                {
                  navigate("/dex");
                }
              }}
            >
              Home
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
