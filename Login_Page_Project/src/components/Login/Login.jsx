import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersData from "../../data/Login_data.js";
import "./Login.css";

// temp data show
// console.log(usersData)

const Login =  () => {
  const [userEamil, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();


  const handleSetEmail = (event) => {
    setUserEmail(event.target.value);
  };
  const handleSetPassword = (event) => {
    setUserPassword(event.target.value);
  };
  const handleUserLogin = async () => {
    try {
      console.log(userEamil);
      console.log(userPassword);

      const userDetails = usersData.find(
        (user) => user.useremail === userEamil && user.password === userPassword
      );

      if (userDetails) {
        navigate("/otppage");
      } else {
        alert("Invalid. Please try again.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="form_body">
      <div className="login_container">
      <h1 className="login_wlc_title" >
            Welcome Back!
        </h1>
        <h3 className="login_wlc_title_2">Sign in to continue to Application</h3>
        <form
          className="dark_form"
          onSubmit={(event) => {
            event.preventDefault();
            handleUserLogin();
          }}
        >
          <label htmlFor="email">User Email</label>
          <input
            type="email"
            id="email"
            value={userEamil}
            onChange={handleSetEmail}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userPassword}
            onChange={handleSetPassword}
          />
          <br />
          <button type="submit">Log In</button>
          <br />
          <div className="last_label">
            Don't have an Account? Go to <Link to="/signup">Sing UP</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
