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
    window.scrollTo(0, 0);

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
                  style={{
                    textTransform: "none",
                    width: "100px",
                    fontWeight: "bold",
                  }}
                >
                  {isFollowed ? "Unfollow" : "Follow"}
                </Button>
              </section>
            </div>
          </section>
        </section>
        {/* <div className="line_info"></div> */}
      </section>

      <div className="user_user_info">

        <h2>About</h2>

        {/* Displaying user details */}
        <p>
          <strong>Name:</strong> {userProfile?.name}
        </p>
        <p>
          <strong>Email:</strong> {userProfile?.email}
        </p>
        <p>
          <strong>Gender:</strong> {userProfile?.gender}
        </p>
        <p>
          <strong>Phone:</strong> {userProfile?.phone}
        </p>

        {/* Displaying address details */}
        <h3>Address</h3>
        {userProfile?.address &&
          userProfile?.address.map((address, index) => (
            <p key={index}>
              {address.street}, {address.city}, {address.state},{" "}
              {address.country} - {address.zipCode}
            </p>
          ))}

        {/* Displaying work experience */}
        <h3>Work Experience</h3>
        {userProfile?.workExperience &&
          userProfile?.workExperience.map((experience, index) => (
            <div key={index}>
              <p>
                <strong>Company:</strong> {experience.companyName}
              </p>
              <p>
                <strong>Designation:</strong> {experience.designation}
              </p>
              <p>
                <strong>Location:</strong> {experience.location}
              </p>
              <p>
                <strong>Start Date:</strong>{" "}
                {new Date(experience.startDate).toLocaleDateString()}
              </p>
              <p>
                <strong>End Date:</strong>{" "}
                {new Date(experience.endDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Description:</strong> {experience.description}
              </p>
            </div>
          ))}

        {/* Displaying education details */}
        <h3>Education</h3>
        {userProfile?.education &&
          userProfile?.education.map((education, index) => (
            <div key={index}>
              <p>
                <strong>School Name:</strong> {education.schoolName}
              </p>
              <p>
                <strong>Degree:</strong> {education.degree}
              </p>
              <p>
                <strong>Start Date:</strong>{" "}
                {new Date(education.startDate).toLocaleDateString()}
              </p>
              <p>
                <strong>End Date:</strong>{" "}
                {new Date(education.endDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Description:</strong> {education.description}
              </p>
            </div>
          ))}

        {/* Displaying skills */}
        <h3>Skills</h3>
        {userProfile?.skills && (
          <ul>
            {userProfile.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
