import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersData from "../../data/Login_data.js";
import "./Login.css";

const Login = () => {
  const [userEamil, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const handleSetEmail = (event) => {
    setUserEmail(event.target.value);
    
  };
  const handleSetPassword = (event) => {
    setUserPassword(event.target.value);
   
  };
  const handleUserLogin = () => {
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
        <form
          className="dark_form"
          onSubmit={(event) => {
            event.preventDefault();
            handleUserLogin();
          }}
        >
          <label htmlFor="email">User Email</label>
          <br />
          <input
            type="email"
            id="email"
            value={userEamil}
            onChange={handleSetEmail}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            value={userPassword}
            onChange={handleSetPassword}
          />
          <br />
          <button type="submit">Log In</button>
          <br />
          <label>Don't have an Account?</label>
          <a>Singnup Now</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
