import React,{useEffect,useState}from "react";
import Navbar from "../Navbar";
import Avatar from "@mui/material/Avatar";
import "./myProfile.css";
// import { userMap } from "../Datastoar";
import { UserMap } from "../Datastore";

function MyProfile(){

    const [userProfile, setUserProfile] = useState(null);
    const bearerToken = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const fetchData = async () => {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/facebook/user/${userId}`,
          {
            method:"Get",
            headers: {
              Authorization: `Bearer ${bearerToken}`,
              projectID: "f104bi07c490",
            },
          }
        );
        const data = await response.json();
        setUserProfile(data.data);
        console.log("profile Data", data);
      };

      useEffect(() => {
        fetchData("userId");
      }, []);
    return(
        <div >
            <Navbar />
            <section className="myProfileContent">
            <section className="profileHeader">
            <section className="profileImage">
                <img id="profileimg" src={UserMap.get(userId)?.photo} alt="user Image"/>
            </section>
            <section className="profileAvtar">
                <div className="profileAvtarDiv">
            <section className="avtarProfile">
            {UserMap.get(userId) && (
                            <Avatar sx={{ width: 135, height: 135 }} src={UserMap.get(userId)?.photo}></Avatar>
                            )}
           </section>
            
            <section>
            <h3 className="userProfileName">{userProfile?.name}</h3>
            </section>
            <section>
                <button>Learn More</button>
                <button>Following</button>
                <button>Message</button>
            </section>
            </div>
            </section>

            </section>
            </section>
            
        </div>
    )
}

export default MyProfile;