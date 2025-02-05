import React, { useEffect } from "react";
import styled from "styled-components";
import PokemonCard from "../PokemonCard/PokemonCard";

const Header = styled.div`
  /* display: block; */
  width: auto;
  background-color: #586249;
  margin: 20px 90px;
  border-radius: 10px;
  text-align: center;
  padding-bottom: 20px;
`;

const Title = styled.img`
  display: flex;
  margin: auto;
  align-items: center;
  padding: 10px;
`;

const Balls = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
`;

const BallSt = styled.img`
  width: 50px;
  height: 50px;
  border: 2px dashed #ffffff;
  border-radius: 10px;
  padding: 30px;
  background-color: #ffffff6f;
  margin: 20px;
`;

const Dashboard = ({ myMon, deleteMypokeMon }) => {
  // 여기서 6번 계산
  // myMon에 있는 객체의 개수만큼 card를 출력하고,

  // 6-(myMon 개수)
  const emptyCards = 6 - myMon.length;
  return (
    <Header>
      <Title src="/assets/포켓몬_도감_이미지-removebg-preview.png" />
      <Balls>
        {/* myMon(클릭한 카드)배열 중 6번째까지만 자르고 카드 형식으로 mapping하기*/}
        {myMon.map((mon, index) => {
          return (
            <PokemonCard
              key={index}
              data={mon}
              deleteMypokeMon={deleteMypokeMon}
              isAdd={false} // 대시보드에 있을 때 거짓
            />
          );
        })}
        {/* Array.from : length만큼 요소가 undefinded인 빈 배열을 생성 
            그 배열의 갯수(index 만큼만 mapping하기 (요소가 들어가는 부분에 _은 index만 필요하기 때문에 !!)*/}
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
