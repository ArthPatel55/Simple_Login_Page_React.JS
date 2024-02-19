import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [foundError, setError] = useState(false);
  const navigate = useNavigate();
  // console.log("error -->",foundError);
  const handleSetEmail = (event) => {
    setUserEmail(event.target.value);
    
  };
  const handleError=()=>{
    setError(false)
  }
  const handleSetPassword = (event) => {
    setUserPassword(event.target.value);
  };
  const handleUserLogin = async () => {
    try {
        const response = await fetch("http://192.168.1.28:4000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
      });
      if(response.ok){
        const { accessToken } = await response.json();
        localStorage.setItem('accessToken', accessToken);
        // console.log("token-> ", accessToken)
        navigate("/otppage");
      }else {
        
        const errorData = await response.json();
        const error =new Error(errorData.message || "Login failed");
        console.log("Error to Response data:",error);
        if(error){
          setError(true)
        }
      }
    } catch (error) {
      console.log("Error sending data to API:",error);
      setError(true);
    }
  };
  return (<div className="container">
    <div className="form_body">
      <div className="login_container">
        <h1 className="login_wlc_title">Welcome Back!</h1>
        <h3 className="login_wlc_title_2">
          Sign in to continue to Application
        </h3>
       <form className="dark_form" onSubmit={(event) => {
            event.preventDefault();
            handleUserLogin();
          }}>
          <label htmlFor="email">User Email</label>
          <input
            type="email"
            id="email1"
            value={userEmail}
            onClick={handleError}
            onChange={handleSetEmail}
            className={foundError === false ? '' : 'incorrect'}
            // style={ foundError  ? { borderColor:'#FFEBEB'}+{ background:'#FF4A4A'} : '' }
          />{foundError === false ? '' :  <label className={foundError === false ? '' : 'error_lable'} >Please Enter Valid Email</label>}
         
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onClick={handleError}
            value={userPassword}
            onChange={handleSetPassword}
            className={foundError === false ? ' ' : 'incorrect'}
            //  style={  foundError  ?{ borderColor:'#FFEBEB'}+{ background:'#FF4A4A'}  : '' }
          />
          {foundError === false ? '' :  <label className={foundError === false ? '' : 'error_lable'} >Please Enter Valid Password</label>}
          <br />
          <button type="submit">Log In</button>
          <br />
          <div className="last_label">
            Don't have an Account? Go to <Link to="/signup">Sing UP</Link>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
