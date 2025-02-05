import { createContext } from "react";

const PokemonContext = createContext(null);

// provider 생성 후 export => 주입하기
// 영향권에서 사용하기
export function PokemonProvider({ children }) {
  return <PokemonContext.Provider>{children}</PokemonContext.Provider>;
}
