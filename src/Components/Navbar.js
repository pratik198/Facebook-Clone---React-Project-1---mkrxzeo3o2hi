// import React, { useState } from "react";
// import "../Styles/Navbar.css";
// import { styled, alpha } from "@mui/material/styles";
// import SearchIcon from '@mui/icons-material/Search';
// import HomeIcon from '@mui/icons-material/Home';
// import FlagIcon from '@mui/icons-material/Flag';
// import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
// import { StorefrontOutlined, SupervisedUserCircle } from "@mui/icons-material";
// import Avatar from "@mui/material/Avatar";
// import { IconButton } from "@mui/material";
// import InputBase from "@mui/material/InputBase";
// import AddIcon from '@mui/icons-material/Add';
// import ForumIcon from '@mui/icons-material/Forum';
// import { NotificationsActive } from "@mui/icons-material";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import SearchComponent from "./searchComponent";
// const Search = styled("div")(({ theme }) => ({
//     display: "flex",
//     alignItems: "center",
//     marginLeft: "15%",
//     width: "50%",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//   }));

//   const SearchIconWrapper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "inherit",
//     width: "100%",
//     "& .MuiInputBase-input": {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create("width"),
//       width: "100%",
//       [theme.breakpoints.up("md")]: {
//         width: "20ch",
//       },
//     },
//   }));

// function Navbar() {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [apiSearchData, setApiSearchData] = useState([]);

//     const handleSearch = async () => {
//         const searchUrl2 = `https://academics.newtonschool.co/api/v1/facebook/post?search={"author.name":"${searchQuery}"}`;
//         if (searchQuery.trim() === "") {
//           // If searchTerm is empty or contains only whitespace, do not make the API call
//           setApiSearchData([]);
//           return;
//         }
//         try {
//           const response = await fetch(searchUrl2, {
//             headers: {
//               projectID: "f104bi07c490",
//             },
//           });
//           const searchData = await response.json();
//           setApiSearchData(searchData["data"]);
//         } catch (error) {
//           console.log("Error fetching search data", error);
//         }
//         //navigate("/SearchComponent");
//       };

//       const handleInputChange = (e) => {
//         setSearchQuery(e.target.value);
//       };

//     // Define a function to toggle the dropdown
//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };
//     return (
//         <div className="header">
//             {/* Header is split into 3 areas: center, left & right */}
//             <div className="header_left">
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />
//                 <div className="header_input">
//                 <Search className="search-Bar">
//                 <SearchIconWrapper>
//                   <SearchIcon />
//                   </SearchIconWrapper>
//                     <StyledInputBase
//                        className="search_input"
//                        placeholder="Search Facebook"
//                        inputProps={{"aria-label":"search"}}
//                        value={searchQuery}
//                         onChange={handleInputChange}
//                         onKeyDown={(e) => {
//                             if (e.key === "Enter") {
//                                 handleSearch();
//                             }
//                         }}
//                    />
//                    </Search>
//                 </div>
//             </div>
//             <div className="header_center">
//                 <div className="header_option header_option--active">
//                     <HomeIcon fontSize="large" />
//                 </div>
//                 <div className="header_option">
//                     <FlagIcon fontSize="large" />
//                 </div>
//                 <div className="header_option">
//                     <SubscriptionsIcon fontSize="large"/>
//                 </div>
//                 <div className="header_option">
//                     <StorefrontOutlined fontSize="large"/>
//                 </div>
//                 <div className="header_option">
//                     <SupervisedUserCircle fontSize="large"/>
//                 </div>
//             </div>
//             <div className="header_right">
//                 <Avatar src="https://scontent.fbbi1-1.fna.fbcdn.net/v/t39.30808-6/329750281_876225640319997_3973598474329394205_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=r1PdmW_XIkwAX9987Xg&_nc_oc=AQlfif9dhoddyoXdvpPbbKUhpdixp2v5y7aafQAskQ6Ewf2rp5QzDMm3d-peV_FFrDcxy4AhaEnklX4b3XkyRcWm&_nc_ht=scontent.fbbi1-1.fna&oh=00_AfDKEnqNrX9BMTebv3AS56gm_RzgDMITwSP2JcdbIYustw&oe=651F8A81" alt="Avatar" />
//                 <IconButton>
//                     <AddIcon />
//                 </IconButton>
//                 <IconButton>
//                     <ForumIcon />
//                 </IconButton>
//                 <IconButton>
//                     <NotificationsActive/>
//                 </IconButton>
//                 <IconButton onClick={toggleDropdown}>
//                     <ExpandMoreIcon />
//                 </IconButton>

//             </div>
//             {/* apiSearchData &&  */}
//             <SearchComponent apiSearchData={apiSearchData} />
//         </div>
//     );
// }

// export default Navbar;
import { useState } from "react";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "../Styles/Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { StorefrontOutlined, SupervisedUserCircle } from "@mui/icons-material";
import { useAuth } from "./Context";
import { toBeChecked } from "@testing-library/jest-dom/matchers";
// import SearchIcon from '@mui/icons-material/Search';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

function handleLogout() {
  console.log("clicked");
  localStorage.removeItem("token");
}

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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Link to="/">
          <button onClick={handleLogout}>Profile</button>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="mui-nav-bar" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Link to={"/main"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
              className="image-nav"
              alt=""
            />
          </Link>
          <Search className="miu-search-bar">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search facebook"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div className="header_center">
            <div className="header_option header_option--active">
              <HomeIcon fontSize="large" />
            </div>
            <div className="header_option">
              <FlagIcon fontSize="large" />
            </div>
            <div className="header_option">
              <SubscriptionsIcon fontSize="large" />
            </div>
            <div className="header_option">
              <StorefrontOutlined fontSize="large" />
            </div>
            <div className="header_option">
              <SupervisedUserCircle fontSize="large" />
            </div>
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="#0866FF"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="#0866FF"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="#0866FF"
            >
              <Link to="/">
                <AccountCircle onClick={handleLogout} />
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
