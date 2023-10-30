import VideocamIcon from "@mui/icons-material/Videocam";
import React from "react";
import "../Styles/WhatIsOnUrMind.css";
import Avatar from "@mui/material/Avatar";
import CollectionsIcon from "@mui/icons-material/Collections";
import MoodIcon from "@mui/icons-material/Mood";
import { Typography } from "@mui/material";

function WhatIsOnUrMind() {
  return (
    <div className="wht-is-on-your-mind">
      {/* reels box */}
      <div className="parent-reel-section">

        <div className="reel-box">
          
          {/* <Avatar className="story_avatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
         
          <img className="story-img" src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/Naruto.jpg?ssl=1&quality=80&w=800" alt="#"/>
          
        </div>

        <div className="reel-box">
          <img className="story-img" src="https://cdn.mos.cms.futurecdn.net/68nJwaxHSFmE6whdL4r5oH-970-80.jpg.webp" alt="#"/>
        </div>

        <div className="reel-box">
          <img className="story-img" src="https://thumbor.forbes.com/thumbor/trim/0x53:980x604/fit-in/711x399/smart/https://specials-images.forbesimg.com/imageserve/60834c47698b7d2cd708c3f0/0x0.jpg" alt="#"/>
        </div>

        <div className="reel-box">
          <img className="story-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnG0NLa59PE1ZVQeqq4ZJkkkhuibDTG2hHYg&usqp=CAU" alt="#" />
        </div>

        <div className="reel-box">
        <img className="story-img" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191101175718/How-do-I-become-a-good-Java-programmer.png" alt="#" />
        </div>

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
            <Avatar alt="Remy Sharp" src="https://scontent.fbbi5-3.fna.fbcdn.net/v/t39.30808-6/329750281_876225640319997_3973598474329394205_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=s1L-8CVRSBEAX9z1tWR&_nc_oc=AQkfuV19465mQ9H3WM_m9uAGqfE7dBg6E3_E8xpE-PE5RxkhNM2txngTPaIQ1g4uhfG_o-u6d5I8KNxPI-prVAOd&_nc_ht=scontent.fbbi5-3.fna&oh=00_AfAgj04fAIEy_wF97obQlRQ1ZEopBXaqw0yXvpSEPAglnw&oe=65393FC1" />
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
    </div>
  );
}

export default WhatIsOnUrMind;
