import React from "react";
import styled from "styled-components";

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

const Dashboard = ({ deleteMypokeMon }) => {
  // 여기서 6번 계산
  for (let i = 0; i <= 6; i++) {}
  return (
    <Header>
      <Title src="/assets/포켓몬_도감_이미지-removebg-preview.png" />
      <Balls>
        {/* List 에서 클릭된 카드(filterMon)를 PockmonCard로 출력하여 BallSt 대체하기 
            ?? filterMon은 배열. PokemonCard와 별개로 카드 만들기..?
            ?? PokemonCard를 어떻게 dash에 출력?
            ?? 출력한 후 BallSt를 대체하기

            // 6번 순회, myMon에 들어간 갯수만큼을 포켓몬 카드로 보여주기
        */}
        <BallSt src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" />
        <BallSt src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" />
        <BallSt src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" />
        <BallSt src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" />
        <BallSt src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" />
        <BallSt src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" />
      </Balls>
    </Header>
  );
};

export default Dashboard;
