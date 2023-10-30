import React from "react";
import "../Styles/SidebarLeft.css";
import { ExpandMoreOutlined } from "@mui/icons-material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
// import Button from "@mui/icons-material"

const user = {
  photoURL:
    "https://scontent.fbbi5-3.fna.fbcdn.net/v/t39.30808-6/329750281_876225640319997_3973598474329394205_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=s1L-8CVRSBEAX9z1tWR&_nc_oc=AQkfuV19465mQ9H3WM_m9uAGqfE7dBg6E3_E8xpE-PE5RxkhNM2txngTPaIQ1g4uhfG_o-u6d5I8KNxPI-prVAOd&_nc_ht=scontent.fbbi5-3.fna&oh=00_AfAgj04fAIEy_wF97obQlRQ1ZEopBXaqw0yXvpSEPAglnw&oe=65393FC1",
  displayName: "Pratik",
};

function SidebarLeft() {
  return (
    <div className="SidebarLeft">
      <div className="sidebar-icon">
        <div className="abc">
          <Avatar src={user.photoURL} className="a" />
        </div>
        <h4>Arun Pratik Rout</h4>
        {/* <div className="create-a-page">
          <Link to="/createpage">
           <button> create page</button></Link>
        </div> */}
      </div>
      <div className="sidebarRow">
        <LocalHospitalIcon />
        <p className="right-sec">COVID-19 Information Center</p>
      </div>
      <div className="sidebarRow">
        <EmojiFlagsIcon />
        <p className="right-sec">Pages</p>
      </div>
      <div className="sidebarRow">
        <PeopleIcon />
        <p className="right-sec">Friends</p>
      </div>
      <div className="sidebarRow">
        <ChatIcon />
        <p className="right-sec">Messenger</p>
      </div>
      <div className="sidebarRow">
        <StorefrontIcon />
        <p className="right-sec">Marketplace</p>
      </div>
      <div className="sidebarRow">
        <VideoLibraryIcon />
        <p className="right-sec">Videos</p>
      </div>
      <div className="sidebarRow">
        <ExpandMoreOutlined />
        <p className="right-sec">More</p>
      </div>
    </div>
  );
}

export default SidebarLeft;
