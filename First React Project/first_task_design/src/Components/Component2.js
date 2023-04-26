import React from "react";
import "../css/comp2.css";

import arrowVector from "../imgs/Vector.png";
<link href="https://fonts.googleapis.com/css?family=Jost" rel="stylesheet" />;

function Component2() {
  const titles = ["project Plan", "Interior Work", "Realization"];
  const description =
    "There are many variations of the passages of lorem Ipsum from available, majority";
  return (
    <div className="main-parent2">
      <div className="parent2">
        {titles.map((item) => (
          <div className="container">
            <h3 className="title">{item}</h3>
            <h6 className="description">{description}</h6>
            <div className="btnPart">
              <a type="submit" className="label">
                Get Started &nbsp;
                <img src={arrowVector} className="arrowVector" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Component2;
