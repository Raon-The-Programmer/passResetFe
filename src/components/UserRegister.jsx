import React from 'react'

function UserRegister({handleRegister,registerData,setRegisterData,mgs,handleLogin}) {
  return (
    <div>
    <form onSubmit={handleRegister}>
      <div>
        <label>Email Id:</label>
        <input
          type="email"
          value={registerData.username}
          onChange={(e) => {
            setRegisterData({ ...registerData, username: e.target.value });
          }}
          required
        />
      </div>
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          value={registerData.name}
          onChange={(e) => {
            setRegisterData({ ...registerData, name: e.target.value });
          }}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={registerData.password}
          onChange={(e) => {
            setRegisterData({ ...registerData, password: e.target.value });
          }}
          required
        />
      </div>
      <button type="submit">
        REGISTER
      </button>
    </form>
    <button onClick={handleLogin}>Login</button>
  </div>
)
}
export default UserRegister
