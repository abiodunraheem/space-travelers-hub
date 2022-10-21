import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-spinners-css';
import style from './Mission.module.css';
import { displayMissionFunction, missionStatusFunction } from '../../redux/mission/Mission';

const propTypes = {};

const defaultProps = {};

const Mission = () => {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missionReducer);
  useEffect(() => {
    if (!missionList.length) dispatch(displayMissionFunction());
  }, []);
  const handelIsMember = (e) => {
    const { id } = e.target;
    dispatch(missionStatusFunction(id));
  };
  return (
    <div>
      {missionList.isLoading && <div className={style.spinner}><Spinner color="#ffff" /></div>}
      
        ))}

      </div>
    </div>
  );
};

Mission.propTypes = propTypes;
Mission.defaultProps = defaultProps;

export default Mission;
