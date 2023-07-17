import './About.css';
import Leia from './petImg/Leia.jpeg';
import Julie from './petImg/Julie.jpeg';
import Yuna from './petImg/Yuna.jpg';

export default function About() {
  return (
    <div className="frame">
      <div className="aboutCard">
        <img
          src={Julie}
          alt="picJulie"
        />
        <h3>Julie</h3>
        <p>Just hoped for some free food</p>

        <div>
          Favourite food:
          <p>Boiled egg!</p>
        </div>
      </div>
      <div className="aboutCard">
        <img
          src={Leia}
          alt="pic"
        />
        <h3>Leia</h3>
        <p>Curious to know what delicious treats could be prepared</p>

        <div>
          Favourite food:
          <p>Steak!</p>
        </div>
      </div>
      <div className="aboutCard">
        <img
          src={Yuna}
          alt="pic"
        />
        <h3>Yuna</h3>
        <p>On the journey of finding the best tuna recipes</p>

        <div>
          Favourite food:
          <p>Tuna with mussels!</p>
        </div>
      </div>
    </div>
  );
}
