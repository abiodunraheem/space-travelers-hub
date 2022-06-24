import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Spinner } from 'react-spinners-css';
import style from './Profile.module.css';
import { displayMissionFunction } from '../../redux/mission/Mission';

const propTypes = {};

const defaultProps = {};

const Profile = () => {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missionReducer.response);
  useEffect(() => {
    dispatch(displayMissionFunction());
  }, []);
  return (

    <div className={style.myprofile}>
      <div className={style.mymission}>
        <h1>My Mission</h1>
        <ul className={style.table}>
          {missionList.map((el) => (
            <li key={el.mission_id}><p>{el.mission_name}</p></li>
          ))}

          <li><p>grinade</p></li>
        </ul>
      </div>
      <div className={style.myrocket}>
        <h1>My Mission</h1>
        <ul className={style.table}>
          <li><p>grinade</p></li>
          <li><p>grinade</p></li>
        </ul>
      </div>
    </div>

  );
};

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
