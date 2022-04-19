import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CoordinateProps } from './interface';

const initialState: CoordinateProps = {
  startX: 0,
  startY: 0,
  bgPosX: 0,
  bgPosY: 0,
  movePosX: 0,
  movePosY: 0,
};

export const coordinate = createSlice({
  name: 'coordinate',
  initialState,
  reducers: {
    setCoordinate(state, action: PayloadAction<CoordinateProps>) {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export const { setCoordinate } = coordinate.actions;

export default coordinate.reducer;
