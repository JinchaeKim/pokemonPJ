import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BgImg = styled.img`
  opacity: 70%;
  background-size: cover;
  position: relative;
  width: 100%;
  z-index: 1;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const TitleImg = styled.img`
  position: absolute;
  width: 600px;
  z-index: 2;
`;

const BtnSt = styled.button`
  position: absolute;
  margin-top: 300px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: red;
  color: white;
  border-radius: 5px;
  z-index: 2;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Group>
        <BgImg src="https://podic.kr/images/misc/Natural_Green_Berry_Tree.png" />
        <TitleImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/800px-International_Pokémon_logo.svg.png" />

        <BtnSt
          onClick={() => {
            navigate("/dex");
          }}
        >
          포켓몬 도감 시작하기
        </BtnSt>
      </Group>
    </>
  );
};

export default Home;
