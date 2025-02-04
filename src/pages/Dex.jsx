import React, { useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import PokemonList from "../components/PokemonList/PokemonList";
import MOCK_DATA from "../data/pokemonList";

const Dex = () => {
  // dashboard 추가 포켓몬 구성 state
  const [myMon, setMyMon] = useState([]);

  // 클릭한 포켓몬 카드 정보 가져오기 -> setMyMon에 입력
  const addMypokeMon = (id) => {
    const findMon = MOCK_DATA.find((i) => {
      // filter는 배열을 반환
      return i.id === id;
    });
    console.log("findMon", findMon);
    setMyMon([...myMon, findMon]);
    // findMon(배열)을 dashboard에 카드로 만들기
    // findMon을 PokemonCard에 전달하여 만들기?
  };

  const deleteMypokeMon = (id) => {
    const filterMon = myMon.filter((i) => {
      return i.id !== id;
    });
    setMyMon(filterMon);
  };

  return (
    <>
      <Dashboard deleteMypokeMon={deleteMypokeMon} />
      <PokemonList addMypokeMon={addMypokeMon} />
    </>
  );
};

export default Dex;
