import VideocamIcon from "@mui/icons-material/Videocam";
import React from "react";
import "../Styles/WhatIsOnUrMind.css";
import Avatar from "@mui/material/Avatar";
import CollectionsIcon from "@mui/icons-material/Collections";
import MoodIcon from "@mui/icons-material/Mood";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import closePNG from "../Images/close.png";

function WhatIsOnUrMind() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const username = localStorage.getItem("userName");
  const myAvtarr = {
    photoURL:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FydG9vbiUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
    displayName: "Pratik",
  };
  const myAvtar = {
    photoURL:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FydG9vbiUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
    displayName: "Pratik",
  };
  return (
    <div to={"/commingsoon"} className="wht-is-on-your-mind">
      {/* reels box */}
      <div className="parent-reel-section">
        <Link to={"/commingsoon"} className="reel-box">
          <img
            className="story-img"
            src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/Naruto.jpg?ssl=1&quality=80&w=800"
            alt="#"
          />
        </Link>
        <Link to={"/commingsoon"} className="reel-box">
          <img
            className="story-img"
            src="https://cdn.mos.cms.futurecdn.net/68nJwaxHSFmE6whdL4r5oH-970-80.jpg.webp"
            alt="#"
          />
        </Link>
        <Link to={"/commingsoon"} className="reel-box">
          <img
            className="story-img"
            src="https://thumbor.forbes.com/thumbor/trim/0x53:980x604/fit-in/711x399/smart/https://specials-images.forbesimg.com/imageserve/60834c47698b7d2cd708c3f0/0x0.jpg"
            alt="#"
          />
        </Link>
        <Link to={"/commingsoon"} className="reel-box">
          <img
            className="story-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnG0NLa59PE1ZVQeqq4ZJkkkhuibDTG2hHYg&usqp=CAU"
            alt="#"
          />
        </Link>
        <Link to={"/commingsoon"} className="reel-box">
          <img
            className="story-img"
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191101175718/How-do-I-become-a-good-Java-programmer.png"
            alt="#"
          />
        </Link>
      </div>
      {/* mind box */}

      <div className="wht_on_ur_mind">
        <div className="first_st_div" onClick={handleOpen}>
          <div className="parent-avtar">
            <Avatar alt="Remy Sharp" src={myAvtar.photoURL} />
          </div>

          <input
            className="box__name"
            type="text"
            placeholder={`What's on your mind,${username}?`}
            style={{outline:"none"}}
          />
        </div>
        <div className="wht_line_sec"></div>
        <div className="second_nd_div">
          <div className="icon_box">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png"
              alt=".."
            />
            <p>Live Video</p>
          </div>
          <div className="icon_box">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"
              alt=".."
            />
            <p>Photos/Video</p>
          </div>
          <div className="icon_box">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png"
              alt=".."
            />
            <p>Feeling/Activity</p>
          </div>
        </div>
      </div>

      <section className="modal_for_create_post">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <div className="css-bhp9pd-MuiPaper-root-MuiCard-root">
              <div className="header_post_modal">
                <h3 className="test_">Create post</h3>

                <img
                  src={closePNG}
                  alt=""
                  onClick={handleClose}
                  className="clickableImage"
                />
              </div>
              <div className="line__modal"></div>
              <div className="avatar__modal">
                <Avatar src={myAvtarr.photoURL} />
                <strong>{username}</strong>
                <div className="friend_div">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/zPcex_q0TM1.png" alt=".."/>
                    <p>Friends</p>
                </div>
                
              </div>
              <div className="middle_div">
              <input type="text" id="myInput" placeholder={`What's on your mind, ${username}?`} />

                </div>
            </div>
          </Box>
        </Modal>
      </section>
    </div>
  );
}

export default WhatIsOnUrMind;
