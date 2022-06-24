/* eslint-disable react/prop-types */

import React from 'react';

const propTypes = {};

const defaultProps = {};

const Rocket = (props) => {
  const rocket = props;
  console.log(rocket);
  const {
    id, name, description, image,
  } = rocket;
  // const handleBooking = () => {
  //   if (rocket.reserved) {
  //     dispatch(CancelRocketBooking(rocket.id));
  //   } else {
  //     dispatch(RocketBooking(rocket.id));
  //   }
  // };
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
              <button className="cancelReserve" id={id} type="button">Cancel Reservation</button>
            </>
          )
          : (
            <>
              <p>{description}</p>
              <button id={id} type="button">Reserve Rocket</button>
            </>
          )}
      </div>
    </div>
  );
};

Rocket.propTypes = propTypes;
Rocket.defaultProps = defaultProps;

export default Rocket;
