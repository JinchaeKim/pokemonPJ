import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: block;
  width: auto;
  background-color: #ededed;
  margin: 30px;
  border-radius: 10px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  font-size: 150%;
  font-weight: 600;
  color: #ff2f2f;
`;

const Balls = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const BallSt = styled.img`
  width: 60px;
  height: 60px;
  border: 2px dashed lightgrey;
  border-radius: 10px;
  padding: 30px;
  background-color: white;
  margin: 20px;
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
