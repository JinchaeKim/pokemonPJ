import React from "react";
import styled from "styled-components";

const BallSt = styled.img`
  width: 70px;
  height: 70px;
  border: 1px dashed gray;
  border-radius: 7px;
  padding: 30px;
  background-color: white;
  margin: 20px;
`;

const Balls = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Header = styled.div`
  display: block;
  width: 100%;
  background-color: #fff9f2;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 150%;
  font-weight: 600;
  color: #5b9300;
`;
const Dashboard = () => {
  return (
    <Header>
      <Title>넌 내 거야 !</Title>
      <Balls>
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
