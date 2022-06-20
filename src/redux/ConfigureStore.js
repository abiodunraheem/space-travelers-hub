import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './mission/Mission';

const allReducer = combineReducers({
  missionReducer,
});
const store = configureStore({
  reducer: allReducer,
});
export default store;
