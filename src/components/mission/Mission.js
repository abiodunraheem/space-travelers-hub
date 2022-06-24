import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-spinners-css';
import style from './Mission.module.css';
import { displayMissionFunction, missionStatusFunction } from '../../redux/mission/Mission';

const propTypes = {};

const defaultProps = {};

const Mission = () => {
  // const [isMember, setMember] = useState(false);
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missionReducer);
  // const isMember = useSelector((state) => state.missionReducer);
  // console.log(isMember);
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
      <div className={style.table}>
        <div className={style.tablerow}>
          <div className={style.tablehead}>Mission</div>
          <div className={style.tablehead}>Description</div>
          <div className={style.tablehead}>Status</div>
          <div className={style.tablehead}> </div>
        </div>
        {missionList.map((el, index) => (
          <div className={`${style.tablerow}`} style={index % 2 === 0 ? { backgroundColor: '#c0c0c07e' } : { backgroundColor: 'white' }} key={el.id}>
            <div className={style.tablecell}><p className={style.btn}>{el.name}</p></div>
            <div className={style.tablecell}>
              <p className={style.desk}>
                {el.description}
              </p>
            </div>
            <div className={`${style.tablecell} ${style.pad}`}>
              <button className={`${el.active ? style.activeMember : style.notMember} ${style.btn}`} type="button">{el.active ? 'Active Member' : 'Not a member'}</button>
            </div>
            <div className={style.tablecell}><button className={`${el.active ? style.activeMemberbtn : style.notactiveMemberBtn} ${style.btn}`} onClick={handelIsMember} id={el.id} type="button">{el.active ? 'Cancel mission' : 'Join mission'}</button></div>

          </div>
        ))}

      </div>
    </div>
  );
};

Mission.propTypes = propTypes;
Mission.defaultProps = defaultProps;

export default Mission;
