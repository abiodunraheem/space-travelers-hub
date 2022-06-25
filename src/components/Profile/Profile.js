import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Profile.module.css';
import { displayMissionFunction } from '../../redux/mission/Mission';
import { getRocketFromAPI } from '../../redux/Rockets/rockets';

const propTypes = {};

const defaultProps = {};

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayMissionFunction());
    dispatch(getRocketFromAPI());
  }, []);

  const missionList = useSelector((state) => state.missionReducer);
  const rocketsList = useSelector((state) => state.RocketsReducer);

  return (

    <div className={style.myprofile}>
      <div className={style.mymission}>
        <h1>My Mission</h1>
        <ul className={style.table}>
          {missionList.map((el) => (
            <li key={el.id}><p>{el.name}</p></li>
          ))}
        </ul>
      </div>
      <div className={style.myrocket}>
        <h1>My Mission</h1>
        <ul className={style.table}>
          {rocketsList.map((el) => (
            <li key={el.id}><p>{el.name}</p></li>
          ))}
        </ul>
      </div>
    </div>

  );
};

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
