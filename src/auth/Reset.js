import React from 'react'
import resetImg from "../assets/forgot.svg"
import { AiOutlineClose } from 'react-icons/ai'


const Reset = ({ onLogin }) => {
  return (
    <div className='main-container --flex-center'>
    <div className='img-container'>
      <img src={resetImg} alt='reset' />
    </div>
    
    <div className='close' onClick={onLogin}>
       <AiOutlineClose color='red' />
    </div>

    <div className='form-container reset'>
      <form className='--form-control'>
          <h2 className='--color-danger --text-center'> Reset Password </h2>

          <input type='email' className='--width-100' placeholder='Email'/>

          {/* <input type='password' className='--width-100' placeholder='Password'/> */}

          <button className='btn --btn-primary --btn-block'> Reset Password </button>

          <span className='--text-sm --block --text-center'> Please check your email for the reset link! </span>

      </form>
    </div>
  </div>
  )
}

export default Reset
