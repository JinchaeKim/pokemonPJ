import { createSlice } from "@reduxjs/toolkit";

const initialState = { id: 0 };

// Slice : 객체, 액션들 + 리듀서
// Slice.action & add.reducer 를 export
const monSlice = createSlice({
  name: "setMyPokemon",
  initialState,
  reducers: {
    // 어떤 액션을 어떻게 동작할지
    // 리듀서는 함수
    addPokemon: (state, action) => {
      state.id = action.payload;
    },
    deletePokemon: (state) => {
      state.id = 0;
    },
  },
});

// action creater
export const { addPokemon, deletePokemon } = monSlice.actions;
// reducer
export default monSlice.reducer;
