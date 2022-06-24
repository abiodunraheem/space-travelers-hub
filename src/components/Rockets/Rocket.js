/* eslint-disable react/prop-types */
import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './rockets.css';
import { CancelRocketBooking, RocketBooking } from '../../redux/Rockets/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;
  const {
    id, name, reserved, description, image,
  } = rocket;
  const handleBooking = (e) => {
    const { id } = e.target;
    if (reserved) {
      dispatch(CancelRocketBooking(id));
    } else {
      dispatch(RocketBooking(id));
    }
  };
  return (
    <div id={id} className="rocket">
      <div className="rocketLeft">
        <img src={image} alt="rocket" />
      </div>
      <div className="rocketRight">
        <h2>{name}</h2>
        {rocket.reserved
          ? (
            <>
              <p>
                <small className="reservedbtn">Reserved</small>
                {description}
              </p>
              <button className="cancelReserve" onClick={handleBooking} id={id} type="button">Cancel Reservation</button>
            </>
          )
          : (
            <>
              <p>{description}</p>
              <button onClick={handleBooking} id={id} type="button">Reserve Rocket</button>
            </>
          )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: Proptypes.shape({
    name: Proptypes.string.isRequired,
    id: Proptypes.number.isRequired,
    description: Proptypes.string.isRequired,
    image: Proptypes.string.isRequired,
    reserved: Proptypes.bool.isRequired,
  }).isRequired,
};
export default Rocket;
