import './Workshop.css';
import Team from './maximg/Team.jpg';

const Workshop = () => {
  return (
    <>
      <h2 className="workshopHeader">Our Workshop</h2>
      <div className="workshopDiv">
        <img
          src={Team}
          alt="Team-Picture"
          className="workshopImage"
        />
        <p className="workshopText">
          Join our workshop to learn some easy and fast cooking recipes. Our
          recipes are not just easy to cook but also super-delicious, wheather
          you want to surprise someone, just improve your eating habits or if
          you wanna show off in front of your friends (or enemies), we'll have
          just the right thing for you. Like that one time where I had that
          "friend" Dave and he was such a douchebag. So I invited him to dinner
          with some of my friends and cooked for them. Did it help me with that
          Dave situation? No! Did I profit in any way from that? Also no! I just
          drifted off while writing... Anyway.. <br /> <br /> Enjoy our
          workshop!
        </p>
      </div>
    </>
  );
};

export default Workshop;
