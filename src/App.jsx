import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [registerData, setRegisterData] = useState({
    username: '',
    name: '',
    password:''
  }) 
  const handleregister = async(e) => {
    e.preventDefault();
    const data = {
      username: registerData.username,
      name: registerData.name,
      password:registerData.password
    }

    await axios.post('http://localhost:3001/api/user', data)
    
    console.log('successfully created')
    setRegisterData({ username: '', name:'',password:''})
  }
  
  return (
    <div>
      <h1>Welcome to our website</h1>
      <form >
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
            type="text"
            value={registerData.password}
            onChange={(e) => {
              setRegisterData({ ...registerData, password: e.target.value });
            }}
            required
          />
        </div>
       <button type='submit' onClick={handleregister}>REGISTER</button>
      </form>
    </div>
  );
}

export default App;
