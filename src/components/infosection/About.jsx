import './About.css';
import Leia from './petImg/Leia.jpeg';
import Julie from './petImg/Julie.jpeg';
import Yuna from './petImg/Yuna.jpg';

export default function About() {
  return (
    <>
      <div className="frame">
        <h1 className="petTitle">About Us</h1>
        <div className="aboutCard">
          <h3 className="petName">Julie</h3>
          <img
            className="petPics"
            src={Julie}
            alt="picJulie"
          />

          <p className="petDescr">
            I'm here because I was hoping there'd be free food
          </p>

          <p className="faveFood">Favourite food:</p>
          <p className="foodAnsw">Boiled egg!</p>
        </div>
        <div className="aboutCard">
          <h3 className="petName">Leia</h3>
          <img
            className="petPics"
            src={Leia}
            alt="pic"
          />

          <p className="petDescr">
            Curious to know what delicious treats could be prepared
          </p>

          <p className="faveFood">Favourite food:</p>
          <p className="foodAnsw">Steak!</p>
        </div>
        <div className="aboutCard">
          <h3 className="petName">Yuna</h3>
          <img
            className="petPics"
            src={Yuna}
            alt="pic"
          />

          <p className="petDescr">
            On the journey of finding the best tuna recipes
          </p>

          <p className="faveFood">Favourite food:</p>
          <p className="foodAnsw">Tuna with mussels!</p>
        </div>
      </div>
    </>
  );
}
