import axios from 'axios';
import { FETCHROCKETS } from './actionTypes';

const baseURL = 'https://api.spacexdata.com/v3/rockets';

// defining initial state
const initialState = [];

// Action creattor
// Action creator function that will display data once it is dispatched
export const displayRocketFunction = () => async (dispatch) => {
  try {
    const res = await axios.get(baseURL);
    return dispatch({ type: FETCHROCKETS, payload: res.data });
  } catch (err) {
    return err;
  }
};

// reducer function
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHROCKETS:
      return action.payLoad;
    default:
      return state;
  }
};

export const getRocketFromAPI = () => (dispatch) => fetch(baseURL)
  .then((res) => res.json()).then((data) => {
    const rockets = data.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
      reserved: false,
    }));
    dispatch({ type: FETCHROCKETS, payLoad: rockets });
  }).catch(() => { });

export default rocketReducer;
