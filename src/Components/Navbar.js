import { useState } from "react";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { Modal } from "@mui/material";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { useAuth } from "./Context";
import {
  Logout,
  StorefrontOutlined,
  SupervisedUserCircle,
} from "@mui/icons-material";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const username = localStorage.getItem("userName");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  const { setApiSearchData } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeLink, setActiveLink] = useState("/main"); // Initialize with the home link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const habdleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      localStorage.removeItem("token");
    }
  };
  const myAvtarr = {
    photoURL:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FydG9vbiUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
    displayName: "Pratik",
  };
  const handleSearch = async () => {
    console.log("inside the search function");
    const searchUrl2 = `https://academics.newtonschool.co/api/v1/facebook/post?search={"content":"${searchQuery}","author.name":"${searchQuery}"}`;
    if (searchQuery.trim() === "") {
      // If searchTerm is empty or contains only whitespace, do not make the API call
      setApiSearchData([]);
      setSearchPerformed(false);
      return;
    }
    try {
      const response = await fetch(searchUrl2, {
        headers: {
          projectID: "mkrxzeo3o2hi",
        },
      });
      const searchData = await response.json();
      console.log(searchData);
      setApiSearchData(searchData["data"]);
      setSearchPerformed(true);
    } catch (error) {
      console.log("Error fetching search data", error);
    }
    navigate("/search");
  };
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        zIndex: 1,
        width: "100%",
      }}
    >
      <div
        className="mui-nav-bar"
        style={{
          backgroundColor: "white",
          boxShadow: "0px -1px 17px -7px rgba(0, 0, 0, 0.75)",
        }}
      >
        <Toolbar>
          <Link to={"/main"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
              className="image-nav"
              alt=""
            />
          </Link>
          <Search className="miu-search-bar">
            <SearchIconWrapper onClick={handleSearch}>
              <SearchIcon onClick={handleSearch} />
            </SearchIconWrapper>
            <StyledInputBase
              className="seachInput"
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </Search>

          {/* 
          <div className="header_center">
            <Link
              to={"/main"}
              className={`header_option ${
                activeLink === "/main" ? "header_option--active" : ""
              }`}
              onClick={() => handleLinkClick("/main")}
            >
              <HomeIcon fontSize="large" />
            </Link>
            <Link
              to={"/commingsoon"}
              className={`header_option ${
                activeLink === "/commingsoon" ? "header_option--active" : ""
              }`}
              onClick={() => handleLinkClick("/commingsoon")}
            >
              <FlagIcon fontSize="large" />
            </Link>
            <Link
              to={"/commingsoon"}
              className={`header_option ${
                activeLink === "/commingsoon" ? "header_option--active" : ""
              }`}
              onClick={() => handleLinkClick("/commingsoon")}
            >
              <SubscriptionsIcon fontSize="large" />
            </Link>
            <Link
              to={"/commingsoon"}
              className={`header_option ${
                activeLink === "/commingsoon" ? "header_option--active" : ""
              }`}
              onClick={() => handleLinkClick("/commingsoon")}
            >
              <StorefrontOutlined fontSize="large" />
            </Link>
            <Link
              to={"/commingsoon"}
              className={`header_option ${
                activeLink === "/commingsoon" ? "header_option--active" : ""
              }`}
              onClick={() => handleLinkClick("/commingsoon")}
            >
              <SupervisedUserCircle fontSize="large" />
            </Link>
          </div> */}

          <div className="header_center">
            <Link
              to={"/main"}
              className={`header_option ${
                activeLink === "/main" ? "header_option--active" : ""
              }`}
              onClick={() => handleLinkClick("/main")}
            >
              <HomeIcon fontSize="large" />
            </Link>
            <Link
              to={"/commingsoon"}
              className={`header_option ${
                activeLink === "/commingsoon" ? "header_option--active" : ""
              }`}
              onClick={() => handleLinkClick("/commingsoon")}
            >
              <FlagIcon fontSize="large" />
            </Link>
            <Link
              to={"/commingsoon2"} // Assuming this is another route
              className={`header_option ${
                activeLink === "/commingsoon2" ? "header_option--active" : ""
              }`}
              onClick={() => handleLinkClick("/commingsoon2")}
            >
              <SubscriptionsIcon fontSize="large" />
            </Link>
            <Link
              to={"/commingsoon3"} // Assuming this is another route
              className={`header_option ${
                activeLink === "/commingsoon3" ? "header_option--active" : ""
              }`}
              onClick={() => handleLinkClick("/commingsoon3")}
            >
              <StorefrontOutlined fontSize="large" />
            </Link>
            <Link
              to={"/commingsoon4"} // Assuming this is another route
              className={`header_option ${
                activeLink === "/commingsoon4" ? "header_option--active" : ""
              }`}
              onClick={() => handleLinkClick("/commingsoon4")}
            >
              <SupervisedUserCircle fontSize="large" />
            </Link>
          </div>

          <Box sx={{ flexGrow: 1 }} />
          <div className="right___side">
            <span className="spannn_main">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="#0866FF"
              >
                <Link to={"/commingsoon"}>
                  <Badge color="error">
                    <MailIcon />
                  </Badge>
                </Link>
              </IconButton>
            </span>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="#0866FF"
            >
              {/* <Link to={"/commingsoon"}>
                <Badge color="error">
                  <NotificationsIcon />
                </Badge>
              </Link> */}
              <div
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="#0866FF"
                style={{ position: "absolute" }}
              >
                <Avatar src={myAvtarr.photoURL} onClick={handleOpen} />
              </div>
            </IconButton>

            <section className="modalSection">
              <Modal
                className="modalAcountIcon"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="modalBox">
                  <Link to={"/profile"}>
                    <Box className="boxUser">
                      <Link to={"/profile"} className="user-name-modal-a">
                        <Avatar src={myAvtarr.photoURL} />
                      </Link>
                      <Link to={"/profile"}>
                        <h3 className="author-name-modal">{username}</h3>
                      </Link>
                    </Box>
                  </Link>
                  <div className="options-modal">
                    <Link to="/commingsoon" className="icons-modal">
                      <SettingsIcon />
                      <p>Settings & privacy</p>
                    </Link>
                    <Link to="/commingsoon" className="icons-modal">
                      <HelpIcon />
                      <p>Help and support</p>
                    </Link>
                    <Link to="/commingsoon" className="icons-modal">
                      <DarkModeIcon />
                      <p>Display & accessibility</p>
                    </Link>
                    <Link to="/update" className="icons-modal">
                      <FeedbackIcon />
                      <p>Update password</p>
                    </Link>
                    <Link to="/" className="black-link">
                      <div className="icons-modal" onClick={habdleLoginLogout}>
                        <Logout />
                        <p
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                          role="button"
                        >
                          {isLoggedIn ? "Logout" : "Login"}
                        </p>
                      </div>
                    </Link>
                  </div>
                </Box>
              </Modal>
            </section>
          </div>
        </Toolbar>
      </div>
    </div>
  );
}
