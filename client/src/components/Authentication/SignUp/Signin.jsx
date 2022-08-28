import '../styles.css';
import React, { useState }  from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import InputPasswordField from '../InputPasswordField';

const isValidEmail = (email) => {
  const emailRegex = new RegExp('[a-z][0-9]*@gmail.com');
  return emailRegex.test(email);
};

const isValidPassword = (password) => {
  const passwordRegex = new RegExp('[0-9]+');
  return password.length > 6 && passwordRegex.test(password);
};


const Signin = () => {
  const { handleUserSignup } = useAuth();
   const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      // confirmPassword: '',
   });
   const [error, setError] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      // confirmPassword: '',
   });

   const [serverError, setServerError] = useState('');
   const navigate = useNavigate();
   const notify = (message) => toast.success(message);

   const handleOnChangeInput = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   const handleFormValidate = () => {
      setError({ firstName: '', lastName: '', email: '', password: '' });
      let successVailidation = true;
      if (!user.firstName) {
         setError((error) => ({
            ...error,
            firstName: 'Please enter a valid name',
         }));
         successVailidation = false;
      }

      if (!user.lastName) {
         setError((error) => ({
            ...error,
            lastName: 'Please enter a valid name',
         }));
         successVailidation = false;
      }

      if (!user.email || !isValidEmail(user.email)) {
         setError((error) => ({
            ...error,
            email: 'Please enter a valid email',
         }));
         successVailidation = false;
      }

      if (!user.password || !isValidPassword(user.password)) {
         setError((error) => ({
            ...error,
            password: 'Password must be 6 characters long',
         }));
         successVailidation = false;
      }
      // if (user.password !== user.confirmPassword) {
      //     setError((error) => ({
      //         ...error,
      //         confirmPassword: 'Passwords do not match',
      //     }));
      //     successVailidation = false;
      // }
      return successVailidation;
   };

   const handleFormSubmit = async (e) => {
      e.preventDefault();

      if (handleFormValidate()) {
         const response = await handleUserSignup(user, notify);

         if (response?.status === 201) {
            navigate('/login');
            notify('User Signed Up');
         }

         if (response?.status !== 201) {
            setServerError(response?.data.message);
         }
      }
   };

  return (
    <div className='form-container'>
      <h1 className='login-header'>SIGN UP</h1>
      <p className='sub-header'>
        Fill below form to sign up UniDzyn store
      </p>
      <form className='submit-form'>
        <div className='row'>
          <div className='label-div'>
            <label className='form-label'>First Name</label>
          </div>
          <div className='input-div'>
            <input 
                className='form-field' 
                id='input-first-name'
                type='text' 
                placeholder='Enter your first name'
                name='firstName'
                value={user.firstName}
                onChange={handleOnChangeInput} 
            />
            <div className='form-validation-msg form-field-error'>
              {error.firstName && (
                <small className='error-text'>*{error.firstName}</small>
              )}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='label-div'>
            <label className='form-label'>Last Name</label>
          </div>
          <div className='input-div'>
            <input 
                className='form-field'
                id='input-last-name'
                type='text' 
                placeholder='Enter your last name'
                name='lastName'
                value={user.lastName}
                onChange={handleOnChangeInput}
            />
            <div className='form-validation-msg form-field-error'>
            {error.lastName && (
              <small className='error-text'>*{error.lastName}</small>
            )}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='label-div'>
            <label className='form-label'>Email</label>
          </div>
          <div className='input-div'>
            <input 
                className='form-field' 
                placeholder='example@example.com' 
                id='input-email'
                type='email'
                name='email'
                value={user.email}
                onChange={handleOnChangeInput}
            />
            <div className='form-validation-msg form-field-error'>
            {error.email && (
              <small className='error-text'>*{error.email}</small>
            )}         
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='label-div'>
            <label className='form-label'>Password</label>
          </div>
          <div className='input-div'>
            <InputPasswordField name={'password'} value={user.password} handleOnChangeInput={handleOnChangeInput} placeholder='Enter new password' />
            <div className='form-validation-msg form-field-error'>
            {error.password && (
              <small className='error-text'>*{error.password}</small>
            )}
            </div>
          </div>
        </div>
        {/* <div className='row'>
          <div className='label-div'>
            <label className='form-label'>Confirm Password</label>
          </div>
          <div className='input-div'>
            <InputPasswordField name={'confirmPassword'} value={user.confirmPassword} handleOnChangeInput={handleOnChangeInput} placeholder='Re-type your password' />
            <div className='form-validation-msg form-field-error'>
            {error.confirmPassword && (
              <small className='error-text'>*{error.confirmPassword}</small>
            )}
            </div>
          </div>
        </div> */}
        <button 
            className='login-btn'
            onClick={(e) => handleFormSubmit(e)} 
            type='submit'
        >
          REGISTER
        </button>
        {serverError && (
            <div className='alert alert-error'>
              <p className='alert-heading'>
                  <span>
                    <i className='fas fa-exclamation-circle'></i>
                  </span>
                  {serverError}
              </p>
            </div>
        )}
        <div className='login-route'>
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
