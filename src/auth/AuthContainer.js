import React from 'react';
import Login from "./Login";
import "./AuthContainer.scss";
import Register from './Register';
import Reset from "./Reset"
import { useState } from 'react';


const AuthContainer = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [reset, setReset] = useState(false);

  // useState Logic to handle views switches
  // Register
  const handleRegister = () => {
    setLogin(false);
    setRegister(true);
    setReset(false)  
  };

  // Reset
  const handleReset = () => {
    setLogin(false);
    setReset(true);
    setRegister(false)
  }

  // Login
  const handleLogin = () => {
    setLogin(true);
    setRegister(false);
    setReset(false);
  }

  return (
    <section className='--flex-center --100vh'>
      <div className='container box'>
        {login && <Login onRegister={handleRegister} onReset={handleReset} />}

        {register && <Register onLogin={handleLogin} />}

        {reset && <Reset onLogin={handleLogin} />}
      </div>
    </section>
  )
}

export default AuthContainer
