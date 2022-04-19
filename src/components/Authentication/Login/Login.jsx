import '../styles.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputPasswordField from '../InputPasswordField';

const Login = () => {
    console.log('render Login');
  return (
      <>
        <div class="form-container">
            <h1 class="login-header">LOGIN</h1>
            <form class="login-form">
                <div class="row">
                    <input class="form-field" placeholder="Enter your email here" required=""/>
                </div>
                <div class="row">
                    <InputPasswordField placeholder="Enter your password here"/>
                </div>
                <button class="login-btn" type="submit">
                    LOGIN
                </button>
                <div class="body-cp-md padding-bottom-1rem">
                    Not a user yet? 
                    <Link to='/signup'>
                        Create your account
                    </Link>
                </div>
            </form>
        </div>
      </>
  );
};

export default Login;

/* 

*/
