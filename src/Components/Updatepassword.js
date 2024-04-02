import React, { useState } from "react";
import "../Styles/Updatepassword.css";
import { getBearerToken, setBearerToken } from "./Datastore";
import { useNavigate } from "react-router-dom";

function Updatepassword() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  const handleUpdatePassword = async () => {
    const userId = localStorage.getItem("userId");

    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          projectID: "mkrxzeo3o2hi",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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

    const data = await response.json();

    if (data.status === "success") {
      console.log("Password updated successfully");
      navigate("/main");
    } else {
      console.log("Password update failed:", data.message);
      setError(data.message);
    }
  };

  return (
    <div className="new-container">
      <div className="input-section">
        <h1>Update password</h1>
        <div className="name-email-password-btn">
          <div>
            {error && <p className="error-message">{error}</p>}
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
              <button
                type="submit"
                className="update-password-btn"
                onClick={handleUpdatePassword}
              >
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
