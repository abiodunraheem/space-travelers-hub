import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketFromAPI } from '../../redux/Rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.RocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (document.querySelector('.roch').children.length === 0) dispatch(getRocketFromAPI());
  }, []);
  return (
    <div className="rockets">
      <ul className="roch">
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            rocket={rocket}
          />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
