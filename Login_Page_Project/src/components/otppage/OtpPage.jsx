import React, { useState } from 'react';
import './OtpPage.css'

const OtpPage = () => {
    const [otp, setOtp] = useState(['', '', '', '']); // Initialize with empty values

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
    return (
      <div className="form_body">
        <div className="otp_container">
        <h1>OTP Input Box</h1>
        <form >
          <div>
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
          <button></button>
          </form>
        </div>
      </div>
    );
}

export default OtpPage
