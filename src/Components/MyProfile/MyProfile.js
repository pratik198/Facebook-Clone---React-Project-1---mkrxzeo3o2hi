import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Avatar from "@mui/material/Avatar";
import "./myProfile.css";
import {Box, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ListItemButton from "@mui/material/ListItemButton";
import { useAuth } from "../Context";
function MyProfile() {
  const loggedInUserId = localStorage.getItem("userId");
  const [userProfile, setUserProfile] = useState({});
  // const [userProfile, setUserProfile] = useState(null);
  const bearerToken = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [Data, setData] = useState([]);
  // const { puId } = useAuth();

  const fetchData = async () => {
    console.log("inside myProfile");
    console.log("my id", userId);
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/facebook/user/${userId}`,
      {
        method: "Get",
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          projectID: "mkrxzeo3o2hi",
        },
      }
    );
    const data = await response.json();
    setUserProfile(data.data);
    console.log("profile Data", data);
  };

  const GetData = async () => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/facebook/post?limit=1000",
        {
          headers: {
            projectID: "mkrxzeo3o2hi",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // const userPosts = data.data.filter(post => post.userId === puId);
        setData(data.data);
      } else {
        console.error("Error while fetching data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeletePost = async (postId) => {
    const loggedInUserId = localStorage.getItem("userId");

    const postToDelete = Data.find((post) => post._id === postId);
    if (postToDelete && postToDelete.author._id === loggedInUserId) {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/facebook/post/${postId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${bearerToken}`,
              projectID: "mkrxzeo3o2hi",
            },
          }
        );

        if (response.ok) {
          console.log(`Post with ID ${postId} deleted successfully`);
          const updatedPosts = Data.filter((post) => post._id !== postId);
          setData(updatedPosts);
        } else {
          console.error(`Failed to delete post with ID ${postId}`);
        }
      } catch (error) {
        console.error("Error deleting post", error);
      }
    } else {
      console.log("You are not authorized to delete this post.");
    }
  };

  useEffect(() => {
    fetchData();
    GetData();
  }, []);

  const myProfile = {
    photoURL:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FydG9vbiUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  };
  const userPosts = Data.filter((post) => post.author._id === loggedInUserId);
  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <div>
      <Navbar />
      <section className="myProfileContent">
        <section className="profileHeader">
          <section className="profileImage">
            <img id="profileimg" src={myProfile.photoURL} alt="user" />
          </section>
          <section className="profileAvtar">
            <div className="profileAvtarDiv">
              <section className="avtarProfile">
                <Avatar
                  sx={{ width: 135, height: 135 }}
                  src={myProfile.photoURL}
                ></Avatar>
              </section>

              <section>
                <h3 className="userProfileName">{userProfile?.name}</h3>
              </section>
              <section>
                {/* <Button
                  variant="contained"
                  className="Button-follow"
                  style={{
                    textTransform: "none",
                    width: "140px",
                    fontWeight: "bold",
                  }}
                >
                  Learn more
                </Button> */}
              </section>
            </div>
          </section>
        </section>
      </section>
      <div className="user_user_info">
        <div className="about_field">
          <h2>About</h2>

          {/* Displaying user details */}
          <p>
            <strong>Name:</strong> {userProfile?.name}
          </p>
          <p>
            <strong>Email:</strong> {userProfile?.email}
          </p>
          <p>
            <strong>Gender:</strong> Male
          </p>
         
        </div>
     </div>
     

     <div className="user_post">
        {userPosts.map((post, index) => (
          <div className="logged-in"
            key={index}
            sx={{

              maxWidth: 450,
              maxHeight: 800,
              height: "50em",
              backgroundColor: "white",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
              borderRadius: 3,
            }}
          >
            <div className="userProfile-img-name" to="/userprofile">
              <div className="accountPost-img">
                <Avatar src={post.author.profileImage} />

                <div className="author-name-name">
                  <h4 className="naem-author">{post.author.name}</h4>
                </div>

                <div
                  className="dlt-fnc"
                  style={{ position: "relative", left: "61%", top: "5px" }}
                >
                  {post.author._id === loggedInUserId && (
                    <div className="moreIconDiv">
                      <div className="moreIcon" onClick={openDropdown}>
                        <MoreVertIcon />
                      </div>
                      {isDropdownOpen && (
                        <div
                          className="dropdownContent"
                          onMouseEnter={openDropdown}
                          onMouseLeave={closeDropdown}
                        >
                          <div className="accountBox">
                            <div
                              className="dropMyBookings"
                              onClick={closeDropdown}
                            >
                              <ListItemButton
                                onClick={() => handleDeletePost(post._id)}
                              >
                                <p>Delete</p>
                              </ListItemButton>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </div>
            </div>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.content}
              </Typography>
            </CardContent>
            {post.images && post.images.length > 0 ? (
                <div className="cardcontent__1">
                  <img src={post.images[0]} alt="not available" />
                </div>
              ) : null}
          </div>
        ))}
      </div>

  
    </div>
  );
}

export default MyProfile;
