import React, { useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import PokemonList from "../components/PokemonList/PokemonList";
import MOCK_DATA from "../data/pokemonList";

const Dex = () => {
  // dashboard 추가 포켓몬 구성 state
  const [myMon, setMyMon] = useState([]);

  // 카드 추가로직
  const addMypokeMon = (id) => {
    // 처음에는 빈 배열이기 때문에 6 이상으로 설정 / early return으로 6개까지만
    if (6 <= myMon.length) {
      alert("최대 6개의 카드만 표시됩니다!");
      return;
    }

    // 객체 하나를 반환하는 find 메서드(filter는 배열)
    const findMon = MOCK_DATA.find((i) => {
      return i.id === id;
    });

    // 중복 방지 로직
    if (myMon.some((monEl) => findMon.id === monEl.id)) {
      alert("이미 추가된 포켓몬입니다.");
    } else {
      setMyMon([...myMon, findMon]);
    }
  };

  // 카드 삭제로직
  const deleteMypokeMon = (id) => {
    const filterMon = myMon.filter((i) => {
      return i.id !== id;
    });
    setMyMon(filterMon);
  };

  return (
    <>
      <Dashboard myMon={myMon} deleteMypokeMon={deleteMypokeMon} />
      <PokemonList
        addMypokeMon={addMypokeMon}
        myMon={myMon}
        deleteMypokeMon={deleteMypokeMon}
      />
    </>
  );
};

export default Dex;
