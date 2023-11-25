import React from 'react'
import ResetPassword from './ResetPassword';

function UserLogin({ handlePassword, loginData, setLoginData, handleBack, mgs }) {

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
          <button onClick={handleBack}> Register</button>
       </div>
    </form>
      <div>
<p>{mgs}</p>
{mgs === 'password is wrong' ? (
<ResetPassword/>
) : mgs === 'password is correct' ? (
<h2>hi</h2>
) : null}
</div>
  </div>
  )
}

export default UserLogin