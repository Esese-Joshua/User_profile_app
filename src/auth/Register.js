import React, { useState, useEffect } from 'react'
import registerImg from "../assets/register.svg"
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import {GoDot} from "react-icons/go";
import { FaCheck } from 'react-icons/fa';


const Register = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showIndicator, setShowIndicator] = useState(false);
  const [pwd, setPwd] = useState("")

  const [pwdLetter, setPwdLetter] = useState(false)
  const [pwdNumber, setPwdNumber] = useState(false)
  const [pwdChar, setPwdChar] = useState(false)
  const [pwdLength, setPwdLength] = useState(false)
  const [pwdComplete, setPwdComplete] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  };
  const handleShowIndicator = () => {
    setShowIndicator(true)
  };
  const handlePasswordChange  = (e) => {
    setPwd(e.target.value)
    console.log(pwd)
  }

    // check for lower and uppercase
    useEffect(() => {
    if (pwd.match(/(?=.*[a-z])(?=.*[A-Z])/)) {
      setPwdLetter(true)
      }else{
        setPwdLetter(false)
      };  
  }, [pwd])

  // Check for numbers
  useEffect(() => {
    if (pwd.match(/([0-9])/)) {
      setPwdNumber(true)
    }else{
      setPwdNumber(false)
    };
  }, [pwd])

  // check for special character
  useEffect(() => {
    if (pwd.match(/(?=.*[!@#$%^&*?_\-])/)
    ) {
      setPwdChar(true)
    }else{
      setPwdChar(false)
    };
  }, [pwd])

  // check for password length
  useEffect(() => {
    if (pwd.length >=8 ) {
      setPwdLength(true)
    }else{
      setPwdLength(false)
    };
  }, [pwd]) 

  
  

  return (
    <div className='main-container --flex-center'>
      <div className='img-container'>
        <img src={registerImg} alt='login' />
      </div>

      <div className='form-container'>
        <form className='--form-control'>
            <h2 className='--color-danger --text-center'>Register</h2>
            
            <input type='text' className='--width-100' placeholder='Username'/>

            <input type='email' className='--width-100' placeholder='Email'/>

            <div className='password'>
              <input 
              type={showPassword ? "text" : "password"} className='--width-100' placeholder='Password'
              onFocus={handleShowIndicator}
              value={pwd} onChange={handlePasswordChange}
              />

              <span className='icon' onClick={handleTogglePassword}>
               {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye /> }
              </span>
            </div>
            
            <button className='btn --btn-primary --btn-block'> Register </button> 
            
            <span className='--text-sm --block'>Have an accout? <a href='##' className='--text-sm' onClick={onLogin}>Login</a></span>

            {/* password strength indicator */}
            <div className={showIndicator ? 'show-indicator' : 'hide-indicator'}>
              <ul className='--list-style-none --card --bg-grey --text-sm --p'>
                <p className='--text-sm'>Password strength indicator</p>
                <li className={pwdLetter ? "pwd-green" : "pwd-red"}>
                  {/* check for lower and uppercase */}
                  <span className='--align-center'>
                    {pwdLetter ? <FaCheck /> : <span className="black-dot" />}
                     {/* <GoDot /> */}
                   &nbsp; Lowercase & Uppercase
                  </span>
                </li>                     
                <li className={pwdNumber ? "pwd-green" : "pwd-red"}> 
                  {/* check for numbers  */}
                  <span className='--align-center'>
                     {pwdNumber ? <FaCheck /> : <span className="black-dot" />}
                   &nbsp; Numbers(0-9) 
                   </span>
                </li>   
                <li className={pwdChar ? "pwd-green" : "pwd-red"}>
                   {/* check for Special characters */}
                  <span className='--align-center'>
                    {pwdChar ? <FaCheck /> : <span className="black-dot" />}
                  &nbsp; Special character (!@#$%^&*?_\-)
                  </span>
                </li>   
                <li className={pwdLength ? "pwd-green" : "pwd-red"}>
                  {/* check for password length */}
                  <span className='--align-center'>
                  {pwdLength ? <FaCheck /> : <span className="black-dot" />}
                   &nbsp; At least 8 Characters
                   </span> 
                </li>
              </ul>
            </div>

        </form>
      </div>
    </div>
  )
}

export default Register
