import React, { useState, useEffect } from 'react';
import './Signup.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');

  const location = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    // Validate name, email, and password
    if (!name) {
      setNameError('Please enter your name');
      return;
    } else {
      setNameError('');
    }

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
      name,
      email,
      password,
    };

    try {
      const result = await axios.post('http://localhost:8000/auth/signup', body);
      alert(result.data.message);
      location('login');
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
      <div className='form'>
        <div className='form-content'>
          <header>Sign Up</header>
          <form action='#'>
            <div className={`field input-field ${nameError ? 'error' : ''}`}>
              <input
                type='text'
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <span  style={{color:'red'}} className='error-message'>{nameError}</span>}
            </div>
            <div className={`field input-field ${emailError ? 'error' : ''}`}>
              <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
              />
              {emailError && <span  style={{color:'red'}} className='error-message'>{emailError}</span>}
            </div>
            <div className={`field input-field ${passwordError ? 'error' : ''}`}>
              <input
                type='password'
                placeholder='Set Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <span  style={{color:'red'}} className='error-message'>{passwordError}</span>}
            </div>
            <div className='field button-field'>
              <button onClick={(e) => register(e)}>Sign Up</button>
            </div>
          </form>
          <div className='form-link'>
            <span>
              Already Signed Up?<Link to={'/login'}>Login</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;