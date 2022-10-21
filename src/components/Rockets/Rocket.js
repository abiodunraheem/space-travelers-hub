import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './rockets.css';
import { CancelRocketBooking, RocketBooking } from '../../redux/Rockets/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;

  
  return (
    <div id={rocket.id} className="rocket">
      <div className="rocketLeft">
        <img src={rocket.image} alt="rocket" />
      </div>
      <div className="rocketRight">
        <h2>{rocket.name}</h2>
        {rocket.reserved
          ? (
            <>
              <p>
                <small className="reservedbtn">Reserved</small>
                {rocket.description}
              </p>
              <button className="cancelReserve" onClick={handleBooking} id={rocket.id} type="button">Cancel Reservation</button>
            </>
          )
          : (
            <>
              <p>{rocket.description}</p>
              <button onClick={handleBooking} id={rocket.id} type="button">Reserve Rocket</button>
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
