import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TitleImg = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 600px;
`;

const BtnSt = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: red;
  color: white;
  border-radius: 5px;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <TitleImg>
        <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/800px-International_Pokémon_logo.svg.png" />

        <BtnSt
          onClick={() => {
            navigate("/dex");
          }}
        >
          포켓몬 도감 시작하기
        </BtnSt>
      </TitleImg>
    </>
  );
};

export default Home;
