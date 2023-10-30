import React, { useState } from "react";
import "../Styles/Loginpage.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { setBearerToken, UserMap } from "./Datastore";

function Loginpage() {
  const projectID = "f104bi07c490";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  function mailInput(e) {
    const mailSet = e.target.value;
    setEmail(mailSet);
  }

  function passwordInput(e) {
    const passwordSet = e.target.value;
    setPassword(passwordSet);
  }

  async function handleLogin() {
    try {
      console.log("xxxx");
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            projectID: "f104bi07c490",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            appType: "facebook",
          }),
        }
      );
      if (response.ok) {
        console.log("Successfully logged in");
        setIsLoggedIn(true);
        let json = await response.json();
        setBearerToken(json["token"]);
        console.log(json);
        localStorage.setItem("token", json.token);
        UserMap.set(json.data._id, {
          name: json.data.name,
          img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
        });
        // console.log(UserMap.keys);
        // console.log(UserMap.values);
        console.log(UserMap.get("652e8f8c64d7830e72354ff6"));
        navigate("/main");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  }

  // if (isLoggedIn) {
  //   return <HomePage />;
  // }

  return (
    <div className="container">
      {/* Left side */}
      <div className="left-container">
        <div className="content">
          <div className="f-logo">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg"
              alt="Facebook Logo"
              className="logo"
            ></img>
          </div>
          <div className="F-content">
            <p>
              Facebook helps you connect and share <br /> with the people in
              your life.
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="right-container">
        <div className="card-container">
          <div className="card-details">
            <div className="input-filed">
              <input
                type="text"
                name="text"
                placeholder="Email address or phone number"
                value={email}
                onChange={mailInput}
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={passwordInput}
              ></input>
            </div>
            <div className="login-button">
              <Button
                variant="contained"
                className="Button"
                onClick={handleLogin}
              >
                Log In
              </Button>
            </div>
            <div className="Forgot-text">
              <Link to={"/update"}>
                <p>Forgotten password?</p>
              </Link>
            </div>
            <div className="line"></div>

            <div className="create-button">
              <Link to={"/signup"}>
                <button type="button" className="C-A-Button">
                  Create new account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
