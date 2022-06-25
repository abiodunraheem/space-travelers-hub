import React from 'react';
import { useSelector } from 'react-redux';
import style from './Profile.module.css';
import MyMissions from './MyMissions';

const propTypes = {};

const defaultProps = {};

const Profile = () => {
  const rocketsList = useSelector((state) => state.RocketsReducer);

  return (
    <>
      <MyMissions />
      <div className={style.myprofile}>

        <div className={style.myrocket}>
          <h1>My Mission</h1>
          <ul className={style.table}>
            {rocketsList.map((el) => (
              <li key={el.id}><p>{el.name}</p></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
