import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import Component5 from "./Component5";
import "../css/home.css";
import Component6 from "./Component6";
import Component7 from "./Component7";

function Home() {
  return (
    <div className="home">
      <Component1 className="comp" />
      <Component2 className="comp" />
      <Component4 className="comp" />
      <Component3 className="comp" />
      <Component5 className="comp" />
      <Component6 className="comp" />
      <Component7 className="comp" />
    </div>
  );
}
export default Home;
