import React, { useState, useEffect } from "react";
import "../Styles/Updatepassword.css";
import { getBearerToken, setBearerToken } from "./Datastore";
import { Link,useNavigate } from "react-router-dom";

function Updatepassword() {
  const navigate = useNavigate(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [updatePasswordError, setUpdatePasswordError] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  ////changes///

  async function makeAPICall() {
    console.log("update called");
    ///Anurag////
    const loginresponse = await fetch(
      "https://academics.newtonschool.co/api/v1/user/login",
      {
        method: "POST",
        headers: {
          projectId: "f104bi07c490",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
       
          email: email,
          password: currentPassword,
          appType: "facebook",
        }),
      }
    );
    const loginjson = await loginresponse.json();
    console.log(loginjson);
    setBearerToken(loginjson["token"]);
    console.log("bearer token after successful login " + getBearerToken());
    //////

    const token = getBearerToken();

    console.log("token in starting in update " + token);

    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/user/updateMyPassword",

      {
        method: "PATCH",

        headers: {
          projectId: "f104bi07c490",
          "Content-Type": "application/json",
          Authorization: token,
        },

        body: JSON.stringify({
       
          name: name,
          email: email,
          passwordCurrent: currentPassword,
          password: newPassword,
          appType: "facebook",
        }),
      }
    );

    const json = await response.json();
    console.log(json);
    console.log("token after update call " + json["token"]);

    if(response.ok){
      console.log("password updated successfully");
      setUpdatePasswordError(null);
      window.alert("Password updated successfully");
      navigate("/");
    }else{
      console.log("password update failed");
      setUpdatePasswordError("password update failed");
      window.alert("Password update failed")
    }
  }


  const handleSubmit = async (e) => {
    console.log("inside handleSubmit");
    e.preventDefault();

    const projectId = "f104bi07c490";

    try {
      const loginResponse = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            projectId: projectId,
          },
          body: JSON.stringify({
            
            email: email,
            password: currentPassword,
            appType: "facebook",
          }),
        }
      );

      console.log("log in response from update password ");
      console.log(loginResponse);
      if (!loginResponse.ok) {
        console.error("Login failed");
        return;
      }

      const loginData = await loginResponse.json();
      setBearerToken(loginData.token);

      console.log("log in data from update password ");
      console.log(loginData);

      const token = getBearerToken();
      console.log("bearer token" + token);
      const updatePasswordResponse = await fetch(
        "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            projectId: projectId,
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: name,
            email: email,
            passwordCurrent: currentPassword,
            password: newPassword,
            appType: "facebook",
          }),
        }
      );
      console.log("update password response");
      console.log(updatePasswordResponse);
      const updatePassData = await loginResponse.json();
      console.log("update data from ");
      console.log(updatePassData);
      if (updatePasswordResponse.ok) {
        console.log("Password updated successfully");
        window.alert("Password updated successfully");
        navigate("/");
      } else {
        console.error("Password update failed");
        window.alert("Password update failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
 
    <div className="new-container">
      <Link to={"/"}>
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        alt="Facebook Logo"
        className="fb__logo"
      /></Link>
      <div className="input-section">
        <h1>Update password</h1>
        <div className="name-email-password-btn">
          <div>
            <input
              className="your-name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />

            <div className="input-for-email">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="password-current">
              <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={handleCurrentPasswordChange}
              />
            </div>
            <div className="password-new">
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={handleNewPasswordChange}
              />
            </div>

            <div className="update-btn">
              <button type="submit" className="update-password-btn" onClick={makeAPICall}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updatepassword;


