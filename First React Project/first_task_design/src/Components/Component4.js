import React from "react";
import "../css/comp4.css";
import comp4Img from "../imgs/comp4Img.jpg";
import vector from "../imgs/Vector.png";
import call from "../imgs/Call Icon.png";

function Component4() {
  return (
    <div className="main-parent4">
      <div className="parent4">
        <div className="address4">
          <div className="left-side">
            <h3 className="title4">
              We Create The Art Of Stylish Living Stylishly
            </h3>
            <p className="description4">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <div className="callSection">
              <div>
                {" "}
                <img src={call} className="callVector" />
              </div>
              <div>
                <p className="phoneNumber">012345678</p>
                <p className="callUs">Call Us Anytime</p>
              </div>
            </div>
            <button className="btn">
              Get Free Estimate
              <img src={vector} />
            </button>
          </div>
        </div>
        <div className="right-side">
          <img src={comp4Img} className="comp4Img"></img>
        </div>
      </div>
    </div>
  );
}
export default Component4;
