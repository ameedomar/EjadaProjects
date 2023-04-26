import { React } from "react";

import "../css/comp7.css";
import logo from "../imgs/Logo.png";
import icons from "../imgs/Icons.png";
function Component7() {
  return (
    <div className="parent7">
      <div className="contantLines">
        <div className="line1">
          <a className="logoTitle">
            <img src={logo} className="logo" />
            <h5 className="intro">Intro</h5>
          </a>
          <p className="pForFirstLine">
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <img src={icons} className="icons" />
        </div>
        <div className="line2">
          <h5 className="lineTitle">Pages</h5>
          <p>About US</p>
          <p>Our Projects</p>
          <p>Our Team</p>
          <p>Contact Us</p>
          <p>Services</p>
        </div>
        <div className="line3">
          <h5 className="lineTitle">Services</h5>
          <p>Kitchan</p>
          <p>Living Area</p>
          <p>Bathroom</p>
          <p>Dinnig Hall</p>
          <p>Bedroom</p>
        </div>
        <div className="line4">
          <h5 className="lineTitle">Contact</h5>
          <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
          <p>contact@interno.com</p>
          <p> (123) 456 - 7890</p>
        </div>
      </div>
    </div>
  );
}
export default Component7;
