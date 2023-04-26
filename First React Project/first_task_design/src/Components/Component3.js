import React from "react";
import "../css/comp3.css";
import p from "../imgs/Photo.png";
import p1 from "../imgs/Photo1.png";
import p2 from "../imgs/Photo2.png";
import p3 from "../imgs/Photo3.png";
import ellipse from "../imgs/Ellipse.png";
import arrowVector from "../imgs/arrowVector.png";

const arrayofImgs1 = [p, p1];
const arrayofImgs2 = [p2, p3];

function Component3() {
  return (
    <div className="parent3">
      <div className="addPart">
        <h3 className="titleComp3">Follow Our Projects</h3>
        <p className="descriptionComp3">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div className="outerShowPart">
        <div className="showPart">
          {arrayofImgs1.map((item) => (
            <div className="photos">
              <div className="topPart">
                <img className="p" src={item} alt="p img" />
                <div className="outerArrow">
                  <div className="texts">
                    <h6 className="modernKitchan">Modern Kitchan</h6>
                    <p className="decor">Decor / Artchitecture </p>
                  </div>

                  <div className="goToNext">
                    <img
                      className="vector"
                      src={arrowVector}
                      alt="elipde"
                    ></img>
                    <img className="cover" src={ellipse} alt="elipde"></img>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="showPart2">
          {arrayofImgs1.map((item) => (
            <div className="photos">
              <div className="topPart">
                <img className="p" src={item} alt="p img" />
                <div className="outerArrow">
                  <div className="texts">
                    <h6 className="modernKitchan">Modern Kitchan</h6>
                    <p className="decor">Decor / Artchitecture </p>
                  </div>

                  <div className="goToNext">
                    <img
                      className="vector"
                      src={arrowVector}
                      alt="elipde"
                    ></img>
                    <img className="cover" src={ellipse} alt="elipde"></img>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Component3;
