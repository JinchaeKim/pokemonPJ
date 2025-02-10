import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast } from "react-toastify";

const initialState = [];

// Slice : 객체, 액션들 + 리듀서
const monSlice = createSlice({
  name: "setMyPokemon",
  initialState,
  reducers: {
    // 어떤 액션을 어떻게 동작할지
    // 리듀서는 함수
    addPokemon: (state, action) => {
      // 카드 개수 6개 제한
      if (6 <= state.length) {
        toast.warn("최대 6개의 카드만 표시됩니다!", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return;
      }
      if (state.some((monEl) => action.payload.id === monEl.id)) {
        toast.warn("이미 추가된 포켓몬입니다.", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return;
      }
      state.push(action.payload);
      toast.success("추가되었습니다!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      // immer에서 .push, .pop, .sort 등의 메서드를 이용해서 state를 변경할 수 있도록 허용함
      // return [...state, action.payload] : state의 주소값을 바꿔줌(setState와 같은 역할)
    },
    deletePokemon: (state, action) => {
      toast.error("삭제되었습니다.", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return state.filter((mon) => {
        // id가 아닌 값 전체를 비교할 경우 주소값이 달라 구분 불가능
        return mon.id !== action.payload.id;
      });
    },
  },
});

// Slice.action & add.reducer 를 export
// action creater
export const { addPokemon, deletePokemon } = monSlice.actions;
// reducer
export default monSlice.reducer;
