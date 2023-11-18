import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Avatar from "@mui/material/Avatar";
import { useAuth } from "../Context";
import { Button } from "@mui/material";
function UserProfile() {
  const [userProfile, setUserProfile] = useState("");
  const [isFollowed, setIsFollowed] = useState(false);
  const bearerToken = localStorage.getItem("token");
  const { puId } = useAuth();
  const fetchData = async () => {
    console.log("user id", puId);
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/user/${puId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            projectID: "f104bi07c490",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUserProfile(data.data);
        console.log("User profile Data", data);

        if (data.data) {
          setIsFollowed(data.data.isFollowed);
        }
      } else {
        console.error("Failed to fetch user profile data");
      }
    } catch (error) {
      console.error("Error fetching user profile data", error);
    }
  };

  const toggleFollow = async () => {
    try {
      const method = isFollowed ? "DELETE" : "POST";

      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/follow/${puId}`,
        {
          method: method,
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            projectID: "f104bi07c490",
          },
        }
      );

      if (response.ok) {
        console.log(
          `User ${isFollowed ? "unfollowed" : "followed"} successfully`
        );

        setIsFollowed(!isFollowed);
      } else {
        console.error(`Failed to ${isFollowed ? "unfollow" : "follow"} user`);
      }
    } catch (error) {
      console.error("Error toggling follow status", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function isNullOrUndefinedorFalse(flag) {
    if (flag === null || flag === undefined || flag === false) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <Navbar />
      <section className="myProfileContent">
        <section className="profileHeader">
          <section className="profileImage">
            <img
              id="profileimg"
              src={userProfile?.profileImage}
              alt="userImage"
            />
          </section>
          <section className="profileAvtar">
            <div className="profileAvtarDiv">
              <section className="avtarProfile">
                <Avatar
                  sx={{ width: 135, height: 135 }}
                  src={userProfile?.profileImage}
                ></Avatar>
              </section>

              <section>
                <h3 className="userProfileName">{userProfile?.name}</h3>
              </section>
              <section className="btn-follow-mess">
                <Button
                  variant="contained"
                  className="Button-follow"
                  onClick={toggleFollow}
                  style={{ textTransform: "none",width: "100px",fontWeight: "bold" }}
                >
                
                  {(isFollowed) ? "Unfollow" : "Follow"}
                </Button>
                

              </section>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default UserProfile;
