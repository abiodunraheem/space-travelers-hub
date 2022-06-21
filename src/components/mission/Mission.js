import React from 'react';
import style from './Mission.module.css';

const propTypes = {};

const defaultProps = {};

const Mission = () => (
  <div className={style.table}>
    <div className={style.tablerow}>
      <div className={style.tablehead}>Table Header</div>
      <div className={style.tablehead}>Table Header</div>
      <div className={style.tablehead}>Table Header</div>
      <div className={style.tablehead}>Table Header</div>

    </div>
    <div className={style.tablerow}>
      <div className={style.tablecell}>Table Cell</div>
      <div className={style.tablecell}>Table Cell</div>
      <div className={style.tablecell}>Table Cell</div>
      <div className={style.tablecell}>Table Cell</div>

    </div>
  </div>
);

Mission.propTypes = propTypes;
Mission.defaultProps = defaultProps;

export default Mission;
