import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// Slice : 객체, 액션들 + 리듀서
// Slice.action & add.reducer 를 export
const monSlice = createSlice({
  name: "setMyPokemon",
  initialState,
  reducers: {
    // 어떤 액션을 어떻게 동작할지
    // 리듀서는 함수
    addPokemon: (state, action) => {
      state.push(action.payload); // immer에서 .push, .pop, .sort 등의 메서드를 이용해서 state를 변경할 수 있도록 허용함
      // return [...state, action.payload] : state의 주소값을 바꿔줌(setState와 같은 역할)
    },
    deletePokemon: (state, action) => {
      state.pop(action.payload);
    },
  },
});

// action creater
export const { addPokemon, deletePokemon } = monSlice.actions;
// reducer
export default monSlice.reducer;
