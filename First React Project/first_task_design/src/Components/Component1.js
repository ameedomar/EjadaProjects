import { React } from "react";
import mainImage from "../imgs/mainImg.jpg";
import "../css/comp1.css";
import arrow from "../imgs/Vector.png";

function Component1() {
  return (
    <div className="main-parent">
      <div className="parent">
        <div className="imgContainer">
          <img
            className="img"
            src={mainImage}
            alt="Main Image should be here"
          />
          <div className="img-title">
            <h1 className="title"> Let Your Home Be Unique </h1>
            <div className="img-description">
              <h4 className="descriptionn">
                There are many variations of the passages of lorem Ipsum
                fromavailable,variations of the passages
              </h4>
            </div>
            <div className="img-btn">
              <button type="submit" className="getStartedBtn">
                Get Started &nbsp;
                <img src={arrow} alt="buttonpng" border="0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Component1;
