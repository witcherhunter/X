import React from 'react'

function SignUp() {
    return (
        <form className='d-flex align-items-center justify-content-center pt-5 pb-5'>
            <div className='d-inline-flex flex-column  border border-gray rounded login-form'>
                <h1 className='d-flex align-items-center justify-content-center  text-danger login-h1'>Dgikala</h1>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <input className='login-input ' placeholder=' enter your email' type='text' ></input>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <input className='login-input mt-4' placeholder='please enter your password' type='password' ></input>
                </div>
                <div className='d-flex flex-column'>
                    <button type="submit" className="btn btn-outline-danger login-btn mb-4 mt-4">Danger</button>
                    <a className='d-flex align-items-center justify-content-center mb-3' href='Login'>اگر حساب کاربری دارید اینجا کلیک کنید</a>
                </div>
            </div>
        </form>
    )
}

export default SignUp
