import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <div className="form_body" >
    <div className="login_container">
    <form className="dark_form">
        <label htmlFor="email">User Email</label><br />
        <input type="email" id="email" /><br />
        <label htmlFor="password">Pass Word</label>
        <input type="password" id="password" />
        <button>
            Log In
        </button><br/>
        <label>Don't have an Account?</label>
        <a>Singnup Now</a>
    </form>
    </div>
    </div>
  )
}

export default Login
