import React, { useState } from 'react';
import axios from 'axios';

function ResetPassword() {
  

  const sendOtp = async () => {
    try {
      // Send a request to your API to generate and send OTP to the provided email
      const response = await axios.post('https://password-reset-backend-gaqe.onrender.com/api/passwordreset/forget-password', {
        username:username,
      });

     
    } catch (error) {
      console.error('Error sending OTP:', error);
      // Handle error (show a message to the user, etc.)
    }
  };

  const resetPassword = async () => {
    try {
      // Send a request to your API to reset the password using the provided OTP and new password
      const response = await axios.post(`https://password-reset-backend-gaqe.onrender.com/api/passwordreset/forget-password/${otp}`, {
        newPassword: newPassword,
      });

      // Assuming the API returns success, you can handle it accordingly
      console.log('Password reset successfully');
    } catch (error) {
      console.error('Error resetting password:', error);
      // Handle error (show a message to the user, etc.)
    }
  };

  return (
    <div>
      {showEmailInput && (
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={sendOtp}>Send OTP</button>
        </div>
      )}

      {showOtpInput && (
        <div>
          <label>OTP:</label>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <label>New Password:</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <button onClick={resetPassword}>Reset Password</button>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
