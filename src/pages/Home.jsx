import React from "react";
import { useNavigate } from "react-router-dom";
import { BgImg, BtnSt, Group, TitleImg } from "../styles/StyledComponents";

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
