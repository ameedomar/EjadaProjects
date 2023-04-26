import { React } from "react";
import k1 from "../imgs/displatKitchan1.png";
import k2 from "../imgs/displatKitchan1.png";
import k3 from "../imgs/displatKitchan1.png";

import arrowBtn from "../imgs/arrowBtn.png";
import "../css/comp6.css";
function Component6() {
  const arrayofData = {
    first: {
      photo: k1,
      title: "Let’s Get Solution For Building Construction Work",
      dates: "26 December,2022",
    },
    second: {
      photo: k2,
      title: "Low Cost Latest Invented Interior Designing Ideas",
      dates: "22 December,2022",
    },
    third: {
      photo: k3,
      title: "Best For Any Office & Business Interior Solution",
      dates: "25 December,2022",
    },
  };

  return (
    <div className="main-parent6">
      <div className="parent6">
        <div className="topside">
          <h2 className="article">Articles & News</h2>
          <p className="description6">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
        </div>
        <div className="cardsComp">
          <div className="displayside">
            <div className="content">
              <img src={k1} className="kitchan" />
              <h3 className="h3">
                Let’s Get Solution For Building Construction Work
              </h3>
              <div className="lastline">
                <p className="date">25 December,2022</p>
                <img src={arrowBtn} className="arrowBtn" />
              </div>
            </div>
          </div>
          <div className="displayside">
            <div className="content">
              <img src={k1} className="kitchan" />
              <h3 className="h3">
                Low Cost Latest Invented Interior Designing Ideas.
              </h3>
              <div className="lastline">
                <p className="date">26 December,2022</p>
                <img src={arrowBtn} className="arrowBtn" />
              </div>
            </div>
          </div>
          <div className="displayside">
            <div className="content">
              <img src={k1} className="kitchan" />
              <h3 className="h3">
                Best For Any Office & Business Interior Solution
              </h3>
              <div className="lastline">
                <p className="date">25 December,2022</p>
                <img src={arrowBtn} className="arrowBtn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Component6;
