import { useSelector } from 'react-redux';
import './myprofile.css';

const Myprofile = () => {
  const rockets = useSelector((state) => state.RocketsReducer);
  const missions = useSelector((state) => state.missionReducer.respnse);
  console.log(missions)
  console.log(rockets)

  return (
    <div className="myProfile">
      <section className="my-rockets">
        <h2>My Mission</h2>
        <ul className="reservedCont">
          { missions.map((mission) => (mission.reserved === true ? (
            <li className="reservedItem" key={mission.id}>
              {' '}
              {mission.name}
              {' '}
            </li>
          ) : null))}
        </ul>
      </section>
      <section className="my-rockets">
        <h2>My Rockets</h2>
        <ul className="reservedCont">
          {rockets.map((rocket) => (rocket.reserved === true
            ? (<li className="reservedItem" key={rocket.id}>{rocket.name}</li>) : null
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Myprofile;
