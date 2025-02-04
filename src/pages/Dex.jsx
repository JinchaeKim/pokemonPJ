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
    setMyMon([...myMon, findMon]);

    console.log("myMon", myMon);
    // 6개 이상 alert 띄우기 위치
    // 처음에는 빈 배열이기 때문에 6 이상으로 설정
    if (6 <= myMon.length) {
      alert("최대 6개의 카드만 표시됩니다!");
    }
  };

  const deleteMypokeMon = (id) => {
    const filterMon = myMon.filter((i) => {
      return i.id !== id;
    });
    setMyMon(filterMon);
  };

  return (
    <>
      <Dashboard deleteMypokeMon={deleteMypokeMon} myMon={myMon} />
      <PokemonList addMypokeMon={addMypokeMon} myMon={myMon} />
    </>
  );
};

export default Dex;
