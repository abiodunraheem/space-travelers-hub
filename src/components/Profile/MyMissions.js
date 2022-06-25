import { React } from 'react';
import { useSelector } from 'react-redux';
import style from './Profile.module.css';

const MyMissions = () => {
  const missionList = useSelector((state) => state.missionReducer).filter(
    (rocket) => rocket.active === true,
  );
  return (
    <div className={style.mymission}>
      <h1>My Mission</h1>
      <ul className={style.table}>
        {missionList.length > 0 && missionList.map((el) => (
          <li key={el.mission_id}><p>{el.mission_name}</p></li>
        ))}

        {missionList.length < 1 && <li><p>No reserved mission yet</p></li>}
      </ul>
    </div>
  );
};
export default MyMissions;
