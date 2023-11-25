import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [res_mgs, setRes_Mgs] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewpassword] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();

    const data = {
      username: email.username,
    };

    try {
      const res = await axios.post('https://password-reset-backend-gaqe.onrender.com/api/passwordreset/forget-password', data);

      console.log('successfully Reset mail Sent');
      setEmail({ username: '' });
      const info = res.data;
      setRes_Mgs(`${info.message}`);
    } catch (error) {
      console.log(error);
    }
  };

  const changeNewPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://password-reset-backend-gaqe.onrender.com/api/passwordreset/forget-password/${otp}`,
        newPassword
      );

      console.log('new Password Change', response.data);
      setNewpassword('');
      const info = response.data;
      setRes_Mgs(`${info.message}`); 
        navigate('/');
      
    } catch (error) {
      console.error('Error changing password', error);
    }
  };

  return (
    <div className='container'>
       <div className='inside'> <div>
        <h2>Reset Password</h2>
        <label>Email Id:</label><br />
        <input
          type="email"
          value={email.username}
          onChange={(e) => {
            setEmail({ ...email, username: e.target.value });
          }}
          required
        />
        <div>
          <button onClick={handleSendOTP}>Send OTP</button>
        </div>
        <p>{res_mgs}</p>
      </div>
      {res_mgs === 'Reset email sent successfully' ? (
        <div>
          <div>
            <label htmlFor="newPassword">Enter OTP</label>
            <input
              type="password"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              required
            />
          </div>
          <label htmlFor="">New Password</label>
          <input
            type="password"
            value={newPassword.password}
            onChange={(e) => {
              setNewpassword({ password: e.target.value });
            }}
            required
          />
          <button onClick={changeNewPassword}>submit</button>
          <p>{res_mgs}</p>
        </div>
      ) : null}<Link to='/'>Login</Link></div>
    </div>
  );
}

export default ResetPassword;
