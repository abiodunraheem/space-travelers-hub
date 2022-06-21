// Actions
const ADD_MISSION = 'bookstore/mission/ADD_MISSION';
const REMOVE_MISSION = 'bookstore/mission/REMOVE_MISSION';
const DISPLAY_MISSION = 'bookstore/mission/DISPLAY_MISSION';
const LOADING_MISSION = 'bookstore/missions/LOADING_MISSION';
const NOT_LOADING_MISSION = 'bookstore/mission/NOT_LOADINGMISSION';

// defining initial state
const initialState = {
  isLoading: false,
  response: [],
};

// Action creattor
// Action creator function that will display data once it is dispatched
export const displayMissionFunction = () => async (dispatch) => {
  try {
    return dispatch({ type: DISPLAY_MISSION });
  } catch (err) {
    return err;
  }
};

// reducer function
const missionReducer = (state = initialState, action) => {
  switch (action.payload) {
    case ADD_MISSION:
      return {
        ...state,
        isLoading: false,
        response: [],
      };
    case REMOVE_MISSION:
      return {
        ...state,
        isLoading: false,
        response: [],
      };
    case LOADING_MISSION:
      return {
        ...state,
        isLoading: true,
        response: [],
      };
    case NOT_LOADING_MISSION:
      return {
        ...state,
        isLoading: false,
        response: [],
      };
    default:
      return state;
  }
};

export default missionReducer;
