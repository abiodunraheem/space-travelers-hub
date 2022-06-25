import React from 'react';
import style from './Profile.module.css';
import MyMissions from './MyMissions';
import MyRockets from './MyRockets';

const propTypes = {};

const defaultProps = {};

const Profile = () => (
  <>
    <div className={style.myprofile}>
      <MyMissions />
      <MyRockets />
    </div>
  </>
);

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
