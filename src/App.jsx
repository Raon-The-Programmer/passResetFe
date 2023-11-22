import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [registerData, setRegisterData] = useState({
    username: '',
    name: '',
    password: ''
  });
  const [login, setLogin] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [mgs, setMgs] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLogin(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const data = {
      username: registerData.username,
      name: registerData.name,
      password: registerData.password
    };

    try {
      const res=await axios.post('http://localhost:3001/api/user', data);

      console.log('successfully created');
      setRegisterData({ username: '', name: '', password: '' });
      const info = res.data;
      setMgs(`${info.message}`);
      setLogin(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleBack = (e) => {
    e.preventDefault();
    setLogin(true);
    setMgs('');
}

  const handlePassword = async (e) => {
    e.preventDefault();
    const data = {
      username: loginData.username,
      password: loginData.password
    };
  
    try {
      const res = await axios.post('http://localhost:3001/api/login', data);
      const info = res.data;
      setMgs(`${info.message}`);
      console.log(info);
      setLoginData({ username: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Welcome to our website</h1>
      {login ? (
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
          <div>{ mgs}</div>
        </div>
      ) : (
        <>
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
    <button type="submit">Forget Password</button>
  ) : mgs === 'password is correct' ? (
    <h2>hi</h2>
  ) : null}
</div>
        </>
      )}
    </div>
  );
}

export default App;