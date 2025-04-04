import React from 'react';
import loginImg from "../assets/login.svg";

const Login = ({ onRegister, onReset}) => {
  return (
    <div className='main-container --flex-center'>
      <div className='img-container'>
        <img src={loginImg} alt='login' />
      </div>

      <div className='form-container'>
        <form className='--form-control'>
            <h2 className='--color-danger --text-center'>Login</h2>
            
            <input type='text' className='--width-100' placeholder='Username'/>

            <input type='password' className='--width-100' placeholder='Password'/>

            <button className='btn --btn-primary --btn-block'> Login </button>

            <p> <a href='#' className='--text-sm' onClick={onReset}>Reset password</a> </p> 

            <span className='--text-sm --block'>Dont have an accout? <a href='#' className='--text-sm' onClick={onRegister}>Register</a></span>

        </form>
      </div>
    </div>
  )
}

export default Login
