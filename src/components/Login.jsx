import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";



function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(true)



  const inputhandler = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }


  const passhandler = (e) => {
    e.preventDefault()
    setPassword(e.target.value)

  }


  const formhandler = (e) => {
    e.preventDefault()
    navigate("/");
  }

  //////////////////////// VALIDATION FOR BUTTON ///////////////////////////
  useEffect(() => {
    // Call the validation function and pass the trimmed email and password
    validation(email.trim(), password.trim());
  }, [email, password]); // The dependency array for the useEffect hook

  // The rest of your code ...

  const validation = (email, password) => {
    // Set the disabled value to false if both email and password are not empty, true otherwise
    setDisabled(email == '' || password == '');
  }


  return (
    <form onSubmit={formhandler} className='d-flex align-items-center justify-content-center pt-5 pb-5'>
      <div className='d-inline-flex flex-column  border border-gray rounded login-form'>
        <h1 className='d-flex align-items-center justify-content-center  text-danger login-h1'>Dgikala</h1>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <input className='login-input ' placeholder=' لطفا ایمیل خود را وارد کنید' type='text' onChange={inputhandler}></input>
          <span className='login-error-1'>{email.length === 0 ? "لطفا ایمیل خود راوارد کنید" : email.indexOf("@") === -1 ?  "ایمیل وارد شده بدون @ است " : email.indexOf(".com") + ".com".length !== email.length ? "ایمیل وارد شده صحیح نمیباشد!" : ""}</span>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <input className='login-input mt-4' placeholder='لطفا نام کاربری خود را وارد کنید ' type='password' onChange={passhandler} ></input>
          <span className='login-error-1'>{password.length === 0 ?  "لطفا رمز عبور خود راوارد کنید" : password.length <8 ? "رمز عبور وارد شده ضعیف است" : ""}</span>
        </div>
        <div className='d-flex flex-column'>
          <button type="submit" disabled={disabled} className="btn btn-outline-danger login-btn mb-4 mt-4">Danger</button>
          <a className='d-flex align-items-center justify-content-center mb-3' href='SignUp'>برای ساخت حساب کاربری اینجا کلیک کنید</a>
        </div>
      </div>
    </form>
  )
}

export default Login
