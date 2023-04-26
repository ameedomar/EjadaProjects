import React from "react";
import "../css/comp5.css";
import line from "../imgs/Line.png";

function Component5() {
  return (
    <div className="main-parent5">
      <div className="parent5">
        <div className="c1">
          <h2> 12</h2>
          <p className="des">Years Of Experiance</p>
        </div>
        <div className="line5">
          <img src={line} />
        </div>
        <div className="c2">
          <h2> 85</h2>
          <p className="des">Success Project</p>
        </div>
        <div className="line5">
          <img src={line} />
        </div>
        <div className="c3">
          <h2> 15</h2>
          <p className="des">Active Project</p>
        </div>
        <div className="line5">
          <img src={line} />
        </div>
        <div className="c4">
          <h2> 95</h2>
          <p className="des">Happy CUstomers</p>
        </div>
      </div>
    </div>
  );
}
export default Component5;
