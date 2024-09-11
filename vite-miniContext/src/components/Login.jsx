import React from 'react'
import UserContex from '../Contex/UserContex'
import { useContext, useState } from 'react'

function Login() {
    
    const [username, setusert] = useState('');
    const [password, setpass] = useState('');
    

    const { setUser } = useContext(UserContex);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }
  return (
    <div>
        <h1>Login</h1>
        <input

        value={username}
        onChange={(e) => setusert(e.target.value)}
         type="text" placeholder='username'/>
        <input
        value={password}
        onChange={(e) => setpass(e.target.value)}
        type="password" placeholder='password'/>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login