import axios from 'axios';

// Actions
const DISPLAY_MISSION = 'bookstore/mission/DISPLAY_MISSION';
const LOADING_MISSION = 'bookstore/missions/LOADING_MISSION';
const NOT_LOADING_MISSION = 'bookstore/mission/NOT_LOADINGMISSION';
const MISSION_STATUS = 'bookstore/mission/MISSION_STATUS';

const url = 'https://api.spacexdata.com/v3/missions';

// defining initial state
const initialState = [];

// Action creattor
export const missionStatusFunction = (id) => (dispatch) => {
  try {
    return dispatch({ type: MISSION_STATUS, payload: id });
  } catch (err) {
    return err;
  }
};

// Action creator function that will display data once it is dispatched
export const displayMissionFunction = () => async (dispatch) => {
  try {
    const res = await axios.get(url);
    return dispatch({ type: DISPLAY_MISSION, payload: res.data });
  } catch (err) {
    return err;
  }
};

// reducer function
const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MISSION:
      console.log(action.payload);
      return action.payload.map((mission) => ({ ...mission, active: false }));
    case LOADING_MISSION:
      return {
        ...state,
        isLoading: true,
      };
    case NOT_LOADING_MISSION:
      return {
        ...state,
        isLoading: false,
      };
    case MISSION_STATUS:
      return state.map((mission) => (mission.mission_id === action.payload
        ? { ...mission, active: !mission.active }
        : { ...mission }));
    default:
      return state;
  }
};

export default missionReducer;
