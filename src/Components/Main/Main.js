import React from "react";
import Navbar from "../Navbar";
import Homepage from "../Homepage";
import "./Main.css";
import WhatIsOnUrMind from "../WhatIsOnUrMind";
import SidebarLeft from "../SidebarLeft";
import RightSideBar from "../RightSideBar";

function Main() {
  return (
    <div className="containner__">
      {/* <RightSideBar /> */}
      <div className="right-sidebar">
        <RightSideBar />
      </div>
      <WhatIsOnUrMind />
      <Homepage />
      {/* <SidebarLeft /> */}

      <div className="left-sidebar">
        <SidebarLeft />{" "}
      </div>
    </div>
  );
}

export default Main;
