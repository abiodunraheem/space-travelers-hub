import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './mission/Mission';
import RocketsReducer from './Rockets/rockets';

const allReducer = combineReducers({
  missionReducer,
  RocketsReducer,
});
const store = configureStore({
  reducer: allReducer,
});
export default store;
