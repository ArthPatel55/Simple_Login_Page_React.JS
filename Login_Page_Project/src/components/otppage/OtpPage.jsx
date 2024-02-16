import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import otpData from "../../data/Login_data.js";
import './OtpPage.css'

// temp data show
console.log(otpData)

const OtpPage = () => {
    const [otp, setOtp] = useState(['', '', '', '']); // Initialize with empty values
    const navigate = useNavigate();
    const handleChange = (e, index) => {
      const value = e.target.value;
      if (isNaN(value) || value.length > 1) {
        return;
      }
  
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
      // Move to the next input box automatically
      if (index < newOtp.length - 1 && value !== '') {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    };
    const handleBackspace = (e, index) => {
        if (e.key === 'Backspace' && index > 0) {
          const newOtp = [...otp];
          newOtp[index] = '';
          setOtp(newOtp);
          document.getElementById(`otp-input-${index - 1}`).focus();
        }
      };
      const handleChackOtp=()=>{
        try {
          
          const eneterOTP=otp.join('');
          const otpDetails = otpData.find(
            (otp) => otp.otp === eneterOTP);
            
            console.log(otpDetails);
            if(otpDetails){
              navigate("/welcome");
            } else {
              alert("Invalid. Please try again.");
            }
        } catch (error) {
          console.log(error)
        }
      }
    return (
      <div className="otp_body">
        <div className="otp_container">
        <h1>OTP Input Box</h1>
        <form className="form_body" onSubmit={(event) => {
            event.preventDefault();
            handleChackOtp();
          }}>
          <div id="otp_text_box">
           {otp.map((digit, index) => (
            <input  className="otp-input"
              type="text"
              id={`otp-input-${index}`}
              key={index}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              maxLength="1"
            />
          ))}
          </div>
          <br/><br/>
          <button className="submit_btn">Check OTP</button>
          </form>
        </div>
      </div>
    );
}

export default OtpPage
