import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-spinners-css';
import style from './Profile.module.css';
import { displayMissionFunction } from '../../redux/mission/Mission';

const propTypes = {};

const defaultProps = {};

const Profile = () => {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missionReducer);
  useEffect(() => {
    dispatch(displayMissionFunction());
  }, []);
  return (

    <div className={style.myprofile}>
      <ul className={style.myrocket}>
        <li><p>grinade</p></li>
        <li><p>grinade</p></li>
        <li><p>grinade</p></li>
      </ul>
      <ul className={style.myrocket}>
        <li><p>grinade</p></li>
        <li><p>grinade</p></li>
        <li><p>grinade</p></li>
      </ul>
    </div>

  );
};

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
