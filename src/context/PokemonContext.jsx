import { createContext, useState } from "react";
import MOCK_DATA from "../data/pokemonList";

export const PokemonContext = createContext();

// provider 생성 후 export => 주입하기
// 영향권에서 사용하기
export function PokemonProvider({ children }) {
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
    console.log("findMon", findMon);

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
    <PokemonContext.Provider
      //공유할 value
      value={{
        myMon,
        setMyMon,
        addMypokeMon,
        deleteMypokeMon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
