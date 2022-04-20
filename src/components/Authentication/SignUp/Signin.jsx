import '../styles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import InputPasswordField from '../InputPasswordField';

const Signin = () => {
  return (
    <div class='form-container'>
      <h1 class='login-header'>SIGN UP</h1>
      <p class='sub-header'>
        Fill below form to sign up and enjoy special offers in U&amp;I store
      </p>
      <form class='submit-form'>
        <div class='row'>
          <div class='label-div'>
            <label class='form-label'>First Name</label>
          </div>
          <div class='input-div'>
            <input class='form-field' placeholder='Enter your first name' />
            <div class='form-validation-msg form-field-error'></div>
          </div>
        </div>
        <div class='row'>
          <div class='label-div'>
            <label class='form-label'>Last Name</label>
          </div>
          <div class='input-div'>
            <input class='form-field' placeholder='Enter your last name' />
            <div class='form-validation-msg form-field-error'></div>
          </div>
        </div>
        <div class='row'>
          <div class='label-div'>
            <label class='form-label'>Email</label>
          </div>
          <div class='input-div'>
            <input class='form-field' placeholder='example@example.com' />
            <div class='form-validation-msg form-field-error'></div>
          </div>
        </div>
        <div class='row'>
          <div class='label-div'>
            <label class='form-label'>Password</label>
          </div>
          <div class='input-div'>
            <InputPasswordField placeholder='Enter new password' />
            <div class='form-validation-msg form-field-error'></div>
          </div>
        </div>
        <div class='row'>
          <div class='label-div'>
            <label class='form-label'>Confirm Password</label>
          </div>
          <div class='input-div'>
            <InputPasswordField placeholder='Re-type your password' />
            <div class='form-validation-msg form-field-error'></div>
          </div>
        </div>
        <button class='login-btn' type='submit'>
          REGISTER
        </button>
        <div class='login-route'>
          Already registered?
          <Link to='/login' className='login-clicked'>
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
