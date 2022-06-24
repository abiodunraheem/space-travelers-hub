import { BOOKROCKET, CANCELBOOKING, FETCHROCKETS } from './actionTypes';

const baseURL = 'https://api.spacexdata.com/v3/rockets';

// defining initial state
const initialState = [];

// Action creattor
// Action creator function that will display data once it is dispatched

// Book a rocket
export const RocketBooking = (id) => async (dispatch) => {
  try {
    return dispatch({ type: BOOKROCKET, payload: id });
  } catch (err) {
    return err;
  }
};

// Cancel rocket reservation
export const CancelRocketBooking = (id) => async (dispatch) => {
  try {
    return dispatch({ type: CANCELBOOKING, payload: id });
  } catch (err) {
    return err;
  }
};

// reducer function
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHROCKETS:
      return action.payLoad;
    case BOOKROCKET:
      return state.map((rocket) => (rocket.id === Number(action.payload)
        ? { ...rocket, reserved: !rocket.reserved }
        : { ...rocket }));
    case CANCELBOOKING:
      return state.map((rocket) => (rocket.id === Number(action.payload)
        ? { ...rocket, reserved: !rocket.reserved }
        : { ...rocket }));
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
