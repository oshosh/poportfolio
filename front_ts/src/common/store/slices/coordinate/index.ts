import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CoordinateState } from './intetface';

const initialState: CoordinateState = {
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
    setCoordinate: (state: any, action: PayloadAction<CoordinateState>): any => {
      // return [...state, action.payload];
      return null;
    },
  },
});

export const { setCoordinate } = coordinate.actions;

export default coordinate.reducer;

// https://velog.io/@johnyworld/React-TS-%ED%99%98%EA%B2%BD%EC%97%90-Redux-Toolkit-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0
// https://kyounghwan01.github.io/blog/React/redux/redux-toolkit/#%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB-%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%B2
// https://kyounghwan01.github.io/blog/React/redux/redux-basic/#reducer-%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%B4
// https://velog.io/@johnyworld/React-TS-%ED%99%98%EA%B2%BD%EC%97%90-Redux-Toolkit-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0
