import React from 'react'
import ResetPassword from './ResetPassword';
import { Link } from 'react-router-dom';

function UserLogin({ handlePassword, loginData, setLoginData, mgs }) {

  return (
    <div> 
    <h2>login</h2>
    <form onSubmit={handlePassword}>
      <div>
        <label>Email Id:</label>
        <input
          type="email"
          value={loginData.username}
          onChange={(e) => {
            setLoginData({ ...loginData, username: e.target.value });
          }}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={loginData.password}
          onChange={(e) => {
            setLoginData({ ...loginData, password: e.target.value });
          }}
          required
        />
      </div>
      <button type="submit">
        Submit
        </button>
        <div>
          If New User Please register: 
          <Link to='/register'>Register</Link>
       </div>
    </form>
      <div>
<p>{mgs}</p>
<Link to='/reset_password'>Forget Password</Link>
</div>
  </div>
  )
}

export default UserLogin