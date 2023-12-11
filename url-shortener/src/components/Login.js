import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const location = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const userLogin = async (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email || !isValidEmail(email)) {
      setEmailError('Please enter a valid email');
      return;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Please enter your password');
      return;
    } else {
      setPasswordError('');
    }

    const body = {
      email,
      password,
    };

    try {
      const result = await axios.post('http://localhost:8000/auth/login', body);
      localStorage.setItem('userid', JSON.stringify(result.data.userId));
      localStorage.setItem('token', JSON.stringify(result.data.token));
      console.log(result);
    location('/home');
    } catch (error) {
      alert(error);
    }
  };

  // Basic email validation
  const isValidEmail = (value) => {
    // You can implement a more comprehensive email validation regex if needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className='reg-main'>
      <div className='form login'>
        <div className='form-content'>
          <header>Login</header>
          <form action='#'>
            <div className={`field input-field ${emailError ? '.error' : ''}`}>
              <input
                type='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <span style={{color:'red'}} className='error-message'>{emailError}</span>}
            </div>
            <div className={`field input-field ${passwordError ? 'error' : ''}`}>
              <input
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <span   style={{color:'red'}} className='error-message'>{passwordError}</span>}
            </div>
            <div className='form-link'>
              <a href='#' className='forgot-pass'>
                Forgot password?
              </a>
            </div>
            <div className='field button-field'>
              <button onClick={(e) => userLogin(e)}>Login</button>
            </div>
          </form>
          <div className='form-link'>
            <span>
              Don't have an account?<Link to={'/'}>create a new account</Link>
            </span>
          </div>
        </div>
        <div className='line'></div>
        <div className='media-options'>
          <a href='#' className='field facebook'>
            <img src='https://i.postimg.cc/BvRFsXWZ/fb.png' alt='' className='google-img' />
            <span>Login with Facebook</span>
          </a>
        </div>
        <div className='media-options'>
          <a href='#' className='field google'>
            <img src='https://i.postimg.cc/wThYQPxw/g.png' alt='' className='google-img' />
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;