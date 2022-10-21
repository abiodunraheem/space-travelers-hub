import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './mission/Mission';
import RocketsReducer from './Rockets/rockets';

const allReducer = combineReducers({
  missionReducer,
  RocketsReducer,
});

