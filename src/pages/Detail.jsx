import React from "react";
import MOCK_DATA from "../data/pokemonList";
import { Link, useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  // mock_data 중에 내가 선택한 것
  const datas = MOCK_DATA;
  const navigate = useNavigate();
  const params = useParams(); // Router에서 동적 라우팅으로 정해놓은 값(id)
  console.log("params", params);

  // 배열 한 개만 꺼내오기
  const targetCard = datas.filter((data) => {
    return data.id === Number(params.id);
  });
  console.log("targetCard", targetCard);
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
                navigate("/dex");
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
