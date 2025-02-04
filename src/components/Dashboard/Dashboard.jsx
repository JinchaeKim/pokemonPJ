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
`;

const Title = styled.img`
  display: flex;
  margin: auto;
  align-items: center;
  padding-top: 10px;
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

const Dashboard = ({ deleteMypokeMon, myMon }) => {
  // 여기서 6번 계산
  // myMon에 있는 객체의 개수만큼 card를 출력하고,
  // 6-(myMon 개수) 만큼 BallSt를 출력하기

  // useEffect(() => {
  //   if (myMon.length > 6) {
  //     alert("최대 6개의 카드만 표시됩니다!");
  //   }
  // }, [myMon.length]);

  const emptyCards = 6 - myMon.length;

  return (
    <Header>
      <Title src="/assets/포켓몬_도감_이미지-removebg-preview.png" />
      <Balls>
        {/*  // 6번 순회, myMon에 들어간 갯수만큼을 포켓몬 카드로 보여주기*/}
        {myMon.slice(0, 6).map((mon, index) => {
          return <PokemonCard key={index} data={mon} isAdd={false} />;
        })}
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
