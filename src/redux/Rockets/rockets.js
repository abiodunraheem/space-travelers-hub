import axios from 'axios';
import { FETCHROCKETS, LOADROCKET, NOTLOADINGROCKET } from './actionTypes';

const baseURL = 'https://api.spacexdata.com/v3/rockets';

// defining initial state
const initialState = {
  isLoading: false,
  response: [],
};

// Action creattor
// Action creator function that will display data once it is dispatched
export const displayRocketFunction = () => async (dispatch) => {
  try {
    dispatch({ type: LOADROCKET });
    const res = await axios.get(baseURL);
    dispatch({ type: NOTLOADINGROCKET });
    return dispatch({ type: FETCHROCKETS, payload: res.data });
  } catch (err) {
    return err;
  }
};

// reducer function
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHROCKETS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
      };
    case LOADROCKET:
      return {
        ...state,
        isLoading: true,
      };
    case NOTLOADINGROCKET:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default rocketReducer;
