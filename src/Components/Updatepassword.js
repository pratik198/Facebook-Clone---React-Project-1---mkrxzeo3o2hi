import React, { useState } from "react";
import "../Styles/Updatepassword.css";
import { getBearerToken, setBearerToken } from "./Datastore";

function Updatepassword() {
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

  const handleSubmit = async (e) => {
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

      if (!loginResponse.ok) {
        console.error("Login failed");
        return;
      }

      const loginData = await loginResponse.json();
      setBearerToken(loginData.token);

      
      const token = getBearerToken();

      const updatePasswordResponse = await fetch(
        'https://academics.newtonschool.co/api/v1/user/updateMyPassword',
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'projectId': projectId, 
            'Authorization': `Bearer ${token}`,
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

      if (updatePasswordResponse.ok) {
        console.log('Password updated successfully');
      } else {
        console.error('Password update failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <div className="new-container">
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        alt="Facebook Logo"
        className="fb__logo"
      />
      <div className="input-section">
        <h1>Update password</h1>
        <div className="name-email-password-btn">
          <form onSubmit={handleSubmit}>
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
              <button type="submit" className="update-password-btn">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Updatepassword;
