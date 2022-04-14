import { combineReducers } from '@reduxjs/toolkit';

import coordinate from './coordinate';

const reducer = combineReducers({
  coordinate,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
