import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-spinners-css';
import style from './Mission.module.css';
import { displayMissionFunction } from '../../redux/mission/Mission';

const propTypes = {};

const defaultProps = {};

const Mission = () => {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missionReducer);
  useEffect(() => {
    dispatch(displayMissionFunction());
  }, []);
  return (
    <div className={style.table}>
      { !missionList.isLoading && <div className={style.spinner}><Spinner /></div> }
      <div className={style.tablerow}>
        <div className={style.tablehead}>Mission</div>
        <div className={style.tablehead}>Description</div>
        <div className={style.tablehead}>Status</div>
        <div className={style.tablehead}> </div>

      </div>
      {missionList.response.map((el) => {
        console.log(el);
      })}
      <div className={style.tablerow}>
        <div className={style.tablecell}>Table cell</div>
        <div className={style.tablecell}>
          <p className={style.desk}>
            Alcatra jerky meatball ground round,
            bacon buffalo strip steak short ribs. Beef pastrami short ribs, bresaola
            tongue doner. prosciutto hamburger kielbasa pork chop jerky rump corned beef
            pancetta ribeye. Pork sirloin ribeye swine bacon. Kielbasa burgdoggen porchetta
            ball tip picanha
          </p>
        </div>
        <div className={style.tablecell}>Table Cell</div>
        <div className={style.tablecell}>Table Cell</div>

      </div>
    </div>
  );
};

Mission.propTypes = propTypes;
Mission.defaultProps = defaultProps;

export default Mission;
