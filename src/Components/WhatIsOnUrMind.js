import VideocamIcon from "@mui/icons-material/Videocam";
import React from "react";
import "../Styles/WhatIsOnUrMind.css";
import Avatar from "@mui/material/Avatar";
import CollectionsIcon from "@mui/icons-material/Collections";
import MoodIcon from "@mui/icons-material/Mood";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function WhatIsOnUrMind() {


const myAvtar = {
  photoURL:
    "https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FydG9vbiUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  displayName: "Pratik",
};
  return (
    <Link to={"/commingsoon"} className="wht-is-on-your-mind">
      {/* reels box */}
      <div className="parent-reel-section">

        <Link to={"/commingsoon"} className="reel-box">
         
          <img className="story-img" src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/Naruto.jpg?ssl=1&quality=80&w=800" alt="#"/>
          
        </Link>

        <Link to={"/commingsoon"} className="reel-box">
          <img className="story-img" src="https://cdn.mos.cms.futurecdn.net/68nJwaxHSFmE6whdL4r5oH-970-80.jpg.webp" alt="#"/>
        </Link>

        <Link to={"/commingsoon"} className="reel-box">
          <img className="story-img" src="https://thumbor.forbes.com/thumbor/trim/0x53:980x604/fit-in/711x399/smart/https://specials-images.forbesimg.com/imageserve/60834c47698b7d2cd708c3f0/0x0.jpg" alt="#"/>
        </Link>

        <Link to={"/commingsoon"} className="reel-box">
          <img className="story-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnG0NLa59PE1ZVQeqq4ZJkkkhuibDTG2hHYg&usqp=CAU" alt="#" />
        </Link>

        <Link to={"/commingsoon"} className="reel-box">
        <img className="story-img" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191101175718/How-do-I-become-a-good-Java-programmer.png" alt="#" />
        </Link>

      </div>
      {/* mind box */}
      <div className="parent-mind-box">
        <div className="mind-box">
          <div className="boxx">
            <input
              className="box__name"
              type="text"
              placeholder="What's on your mind..?"
              style={{border:"none", paddingLeft:"15px"}}
            />
          </div>
          <div className="bar"></div>
          <div className="parent-avtar">
            <Avatar alt="Remy Sharp" src={myAvtar.photoURL} />
          </div>
          <div className="parent-footer">
            <div
              className="cam"
              style={{ display: "flex", alignItems: "center" }}
            >
              <VideocamIcon style={{ color: "red" }} />
              <Typography variant="button" style={{textTransform:"none",marginLeft:"2px"}}>Live</Typography>
            </div>
            <div
              className="cam2"
              style={{ display: "flex", alignItems: "center" }}
            >
              <CollectionsIcon style={{ color: "green" }} />
              <Typography variant="button" style={{textTransform:"none",marginLeft:"2px"}}>Photos</Typography>
            </div>
            <div
              className="cam3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <MoodIcon style={{ color: " rgb(255 180 0)" }} />
              <Typography variant="button" style={{textTransform:"none",marginLeft:"2px"}}>Feelings</Typography>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default WhatIsOnUrMind;
