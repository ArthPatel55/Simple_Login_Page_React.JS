
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import usersData from "../../data/Login_data.js";
import './Signup.css'

const Signup = () => {
    const [userEamil, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userName,setUserName]=useState("");
    const navigate = useNavigate();
    const handleSetEmail = (event) => {
      setUserEmail(event.target.value);
    };
    const handleSetPassword = (event) => {
      setUserPassword(event.target.value);
    };
    const handleSetName=(event)=>{
      setUserName(event.target.value);
    }
    const handleUserSignup = () => {
      try {
        console.log(userName)
        console.log(userEamil);
        console.log(userPassword);
        if(handleSetEmail){
          navigate('/')
        }
      } catch (error) {
        console.log(error)
      }
    }
    //   try {
    //     console.log(userEamil);
    //     console.log(userPassword);
    //     const userDetails = usersData.find(
    //       (user) => user.useremail === userEamil && user.password === userPassword
    //     );
  
    //     if (userDetails) {
    //       navigate("/otppage");
    //     } else {
    //       alert("Invalid. Please try again.");
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };
  return (
    <div className="form_body">
      <div className="login_container">
      <h1 className='signup_wlc_title'>
            Signup Application
        </h1>
        <h3 className='signup_wlc_title_2'>Enter your Personal Details</h3>
        <form
          className="dark_form"
          onSubmit={(event) => {
            event.preventDefault();
            handleUserSignup();
          }}
        >
        <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={handleSetName}
          /><br/>
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
          <div className="last_Signup_label">
            Do have an Account? Go to <Link to="/">Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
