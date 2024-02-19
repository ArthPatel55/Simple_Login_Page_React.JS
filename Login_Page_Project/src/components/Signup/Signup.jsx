
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import usersData from "../../data/Login_data.js";
import './Signup.css'

const Signup = () => {
    const [userEamil, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [firstName,setFirstName]=useState("");
    const [userName,setUserName]=useState("");
    const [lastName,setLastName]=useState("");
    const navigate = useNavigate();
   

    const handleUserSignup = async (e) => {
      e.preventDefault();
      const data = {
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        email: userEamil,
        password: userPassword,
        phone: userPhone
      };
      try {
        const response = await fetch("http://192.168.1.28:4000/api/v1/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        console.log("Response:", response.status, response.statusText);
    
        if (response.ok) {
          const responseData = await response.json();
          navigate("/");
          console.log("API Response:", responseData);
        } else {
          const errorData = await response.json();
          console.error("Error sending data to API:", errorData);
        }
      } catch (error) {
        console.error("Error sending data to API:", error.message);
      }
    }
  return (
    <div className="form_body">
      <div className="login_container">
      <h1 className='signup_wlc_title'>
            Signup Application
        </h1>
        <h3 className='signup_wlc_title_2'>Enter your Personal Details</h3>
        <form
          className="dark_form"
          onSubmit={(event) => 
            handleUserSignup(event)}
        >
        <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          /><br/>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          /><br/>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={e=>setLastName(e.target.value)}
          /><br/>
          <label htmlFor="phone">Phone No </label>
          <input
            type="tel"
            id="phone"
            value={userPhone}
            onChange={e => setUserPhone(e.target.value)}
          />
          <br />
          <label htmlFor="email">User Email</label>
          <input
            type="email"
            id="email"
            value={userEamil}
            onChange={e => setUserEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userPassword}
            onChange={e => setUserPassword(e.target.value)}
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
