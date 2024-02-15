import React, { useState } from "react";
import usersData from "../../data/Login_data.js";
import "./Login.css";

const Login = () => {
  const [userEamil, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSetEmail = (event) => {
    setUserEmail(event.target.value);
    console.log(userEamil);
  };
  const handleSetPassword = (event) => {
    setUserPassword(event.target.value);
    console.log(userPassword);
  };
  const handleUserLogin = () => {
    try{
    const userDetails = usersData.map(
      (user) => user.useremail === userEamil && user.password === userPassword
    );
    console.log(userDetails)
    if (userDetails) {
      console.log('welcome');
    } else {
      alert('Invalid. Please try again.');
    }
  }catch(error){console.log(error.message())}
        // console.log();
  };
  return (
    <div className="form_body">
      <div className="login_container">
        <form className="dark_form" onSubmit={handleUserLogin}>
          <label htmlFor="email">User Email</label>
          <br />
          <input
            type="email"
            id="email"
            value={userEamil}
            onChange={handleSetEmail}
          />
          <br />
          <label htmlFor="password">Pass Word</label>
          <br />
          <input
            type="password"
            id="password"
            value={userPassword}
            onChange={handleSetPassword}
          />
          <br />
          <button>Log In</button>
          <br />
          <label>Don't have an Account?</label>
          <a>Singnup Now</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
