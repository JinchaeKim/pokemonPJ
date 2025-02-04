import React, { useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import PokemonList from "../components/PokemonList/PokemonList";
import MOCK_DATA from "../data/pokemonList";

const Dex = () => {
  // dashboard 추가 포켓몬 구성 state
  const [myMon, setMyMon] = useState([]);

  // 클릭한 포켓몬 카드 정보 가져오기 -> setMyMon에 입력
  const setmypokeMon = (id) => {
    const filterMon = MOCK_DATA.filter((i) => {
      return i.id === id;
    });
    console.log("filterMon", filterMon);
    setMyMon(filterMon);
    // setMyMon에 들어온 값을 dashboard에 출력
    // filterMon을 카드로 만들기
  };

  return (
    <>
      <Dashboard setMyMon={setMyMon} />
      <PokemonList setmypokeMon={setmypokeMon} />
    </>
  );
};

export default Dex;
