import axios from 'axios';

// Actions
const DISPLAY_MISSION = 'bookstore/mission/DISPLAY_MISSION';
const LOADING_MISSION = 'bookstore/missions/LOADING_MISSION';
const NOT_LOADING_MISSION = 'bookstore/mission/NOT_LOADINGMISSION';

const url = 'https://api.spacexdata.com/v3/missions';

// defining initial state
const initialState = {
  isLoading: false,
  response: [],
};

// Action creattor
// Action creator function that will display data once it is dispatched
export const displayMissionFunction = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_MISSION });
    const res = await axios.get(url);
    dispatch({ type: NOT_LOADING_MISSION });
    return dispatch({ type: DISPLAY_MISSION, payload: res.data });
  } catch (err) {
    return err;
  }
};

// reducer function
const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MISSION:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
      };
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
    default:
      return state;
  }
};

export default missionReducer;
