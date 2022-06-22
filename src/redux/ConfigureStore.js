import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './mission/Mission';
import rocketReducer from './Rockets/rockets';

const allReducer = combineReducers({
  missionReducer,
  rocketReducer,
});
const store = configureStore({
  reducer: allReducer,
});
export default store;
