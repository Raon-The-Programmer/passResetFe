import axios from 'axios';
import React, { useState } from 'react';
import UserLogin from './Components/UserLogin';
import UserRegister from './Components/UserRegister';


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
      const res=await axios.post('https://password-reset-backend-gaqe.onrender.com/api/user', data);

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
      const res = await axios.post('https://password-reset-backend-gaqe.onrender.com/api/login', data);
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
      {login ? (<UserRegister setRegisterData={setRegisterData} handleRegister={handleRegister} registerData={registerData} handleLogin={handleLogin} mgs={mgs} setMgs={setMgs } />
      ) : (
          <UserLogin setLoginData={setLoginData} loginData={loginData} handlePassword={handlePassword} handleBack={handleBack } mgs={mgs} setMgs={setMgs }  />
      )}
    </div>
  );
}

export default App;