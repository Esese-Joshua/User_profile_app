import React from 'react';
import Login from "./Login";
import "./AuthContainer.scss";
import Register from './Register';
import Reset from "./Reset"
import { useState } from 'react';

 
const AuthContainer = () => {
  const [Auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });

  // Uplifting the states
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  };


  // Refactoring Logics to handle views switches
  // Login
  const handleLogin = () => {
    setAuth({ login: true, register: false, reset: false })
  }

  // Register
  const handleRegister = () => {
    setAuth({ login: false, register: true, reset: false }) 
  };

  // Reset
  const handleReset = () => {
    setAuth({ login: false, register: false, reset: true})
  }


  return (
    <section className='--flex-center --100vh'>
      <div className='container box'>
        
        { Auth.login && <Login onRegister={handleRegister} onReset={handleReset} onShowPassword={showPassword} onTogglePassword={handleTogglePassword} />}

        { Auth.register && <Register onLogin={handleLogin} onShowPassword={showPassword} onTogglePassword={handleTogglePassword}/>}

        { Auth.reset && <Reset onLogin={handleLogin} />}
      </div>
    </section>
  )
}

export default AuthContainer
