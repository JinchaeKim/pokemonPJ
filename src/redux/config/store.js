import { configureStore } from "@reduxjs/toolkit";
import monSliceReducer from "../slices/setMyPokemonSlice"; // default로 내보낸 reducer(변수명 지정)

// 객체 형태의 인자 1개
export const store = configureStore({
  reducer: {
    setMyPokemon: monSliceReducer,
  },
});
