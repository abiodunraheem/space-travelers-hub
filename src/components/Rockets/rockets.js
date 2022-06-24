import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Spinner } from 'react-spinners-css';
// import style from './Rocket.module.css';
import { displayRocketFunction } from '../../redux/Rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsList = useSelector((state) => state.rocketReducer.response);
  console.log(rocketsList);
  useEffect(() => {
    dispatch(displayRocketFunction());
  }, []);

  return (
    <div className="rockets">
      <ul className="roch">
        {rocketsList.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.rocket_id}
            image={rocket.flickr_images}
            description={rocket.description}
            name={rocket.rocket_name}
          // reserved={rocket.reserved}
          />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
