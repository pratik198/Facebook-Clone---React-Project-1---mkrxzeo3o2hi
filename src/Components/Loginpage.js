import React, { useState } from "react";
import "../Styles/Loginpage.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { setBearerToken, UserMap } from "./Datastore";
import bcrypt from "bcryptjs";
function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [unAuthorized, setUnAuthorized] = useState(false);
  const [apiDown, setAPiDown] = useState(false);
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
    if (!email || !password) {
      alert("Please enter required credentials");
      return;
    }

    setEmail("");
    setPassword("");
    setAPiDown(false);
    setUnAuthorized(false);

    console.log("xxxx");
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectID: "mkrxzeo3o2hi",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          appType: "facebook",
        }),
      }
    );
    if (response.status === 401) {
      setUnAuthorized(true);
    } else if (response.status === 500) {
      setAPiDown(true);
    } else if (response.ok) {
      console.log("Successfully logged in");
      const json = await response.json();
      setBearerToken(json["token"]);
      console.log(json);
      localStorage.setItem("token", json.token);
      localStorage.setItem("userId", json.data.user._id);
      localStorage.setItem("userName", json.data.user.name);
      // localStorage.setItem("userId", json.data._id);
      // localStorage.setItem("currentPassword", json.data.password);
      localStorage.setItem(
        "currentPasswordHashed",
        passwordHashFunction(password)
      );
      localStorage.setItem("emailID", json.data.email);
      // Log the current password from local storage
      console.log(
        "Current Password in Local Storage:",
        localStorage.getItem("currentPassword"),
        localStorage.getItem("emailID"),
        localStorage.getItem("userId"),
        localStorage.getItem("userName")
      );
      if (UserMap.has(json.data._id) === false) {
        console.log("user Value is not found in map");
        UserMap.set(json.data._id, {
          name: json.data.name,
          photo:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/995.jpg",
        });
      }

      console.log(UserMap.get("652e8f8c64d7830e72354ff6"));
      navigate("/main");
    } else {
      console.log(response.status);
    }
  }

  const saltRounds = 10;
  const passwordHashFunction = (password) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  };
  ///new changes
  return (
    <>
      <div
        className="headerrrr_login"
        style={{
          position: "absolute",
          backgroundColor: "blue",
          width: "100%",
          height: "42px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p>
          <strong style={{ color: "white", visibility: "hidden" }}>
            {" "}
            This is a React Project of Pratik
          </strong>
        </p>
      </div>
      <div className="container">
        {/* Left side */}
        <div className="left-container">
          {/* <p>This is my React js project</p> */}
          <div className="content">
            <div className="f-logo">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
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
                {unAuthorized && (
                  <p className="warning">wrong email id password</p>
                )}
                {apiDown && (
                  <p className="warning">
                    It's not you,it's us.Please try again after some time
                  </p>
                )}
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
              {/* <div className="Forgot-text">
                <Link to={"/update"}>
                  <p>Forgotten password?</p>
                </Link>
              </div> */}
              <div className="line__"></div>

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
    </>
  );
}

export default Loginpage;
