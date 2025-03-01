import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import {
  Balls,
  BallSt,
  Header,
  HomeBtn,
  Title,
} from "../../styles/StyledComponents";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  // state의 값을 조회
  const myMon = useSelector((a) => {
    return a.setMyPokemon;
  });

  // 6-(myMon 개수)
  const emptyCards = 6 - myMon.length;
  return (
    <Header>
      <HomeBtn
        onClick={() => {
          {
            navigate("/");
          }
        }}
      >
        Main
      </HomeBtn>
      {/* public 이미지는 경로 없이 설정 */}
      <Title src="dash-title.png" />
      <Balls>
        {/* myMon(클릭한 카드)배열 카드 형식으로 mapping하기*/}
        {myMon.map((mon, index) => {
          return (
            <PokemonCard
              key={index}
              data={mon}
              isAdd={false} // 대시보드에 있을 때 거짓
            />
          );
        })}
        {/* Array.from :객체나 이터러블한 객체를 배열로 만들어주는 메서드
            그 배열의 요소 개수(index 만큼)만 mapping하기 (요소가 들어가는 부분에 _ : index만 필요하기 때문에 !! */}
        {Array.from({ length: emptyCards }).map((_, index) => (
          <BallSt
            key={index}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
          />
        ))}
      </Balls>
    </Header>
  );
};

export default Dashboard;
