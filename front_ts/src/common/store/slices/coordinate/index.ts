import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoordinateState } from "./intetface";

const initialState: CoordinateState = {
  startX: 0,
  startY: 0,
  bgPosX: 0,
  bgPosY: 0,
  movePosX: 0,
  movePosY: 0,
};

export const coordinate = createSlice({
  name: "coordinate",
  initialState, // 필수로 타입 지정 안해도 되지만, 확실히 하기로 한다.
  reducers: {
    setCoordinate: (
      state: any,
      action: PayloadAction<CoordinateState>
    ): any => {
      return [...state, action.payload];
    },
  },
});

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const { setCoordinate } = coordinate.actions;

export default coordinate.reducer;
