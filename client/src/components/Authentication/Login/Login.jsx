import '../styles.css';
import React, {useState} from 'react';
import InputPasswordField from '../InputPasswordField';
import { useAuth } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const { handleUserLogin, authDispatch } = useAuth();

  const [user, setUser] = useState({
      email: 'test@gmail.com',
      password: '12345678',
   });

   const [serverError, setServerError] = useState('');
   const notify = (message) => toast.success(message);

   const handleOnChangeInput = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   const handleFormSubmit = async (e) => {
      e.preventDefault();
      setServerError('');

      const response = await handleUserLogin(
         user,
         authDispatch,
         notify,
      );

      if (response.status === 200) {
         console.log('Logged in successfully');
      }

      if (response.status !== 200) {
         setServerError(response.response.data.error);
      }
   };
   
  return (
    <>
      <div className='form-container'>
        <h1 className='login-header'>LOGIN</h1>
        <div className='login-form'>
          <div className='row'>
            <input
              className='form-field'
              id='input-email'
              type='text'
              placeholder='Enter your email here'
              required=''
              name='email'
              value={user.email}
              onChange={handleOnChangeInput}
            />
          </div>
          <div className='row'>
            <InputPasswordField name={'password'} value={user.password} handleOnChangeInput={handleOnChangeInput} placeholder='Enter your password here' />
          </div>
          <button className='login-btn' type='submit' onClick={(e) => handleFormSubmit(e)}>
            LOGIN
          </button>
          <small className='server-error'>
              {serverError && <span>{serverError}</span>}
          </small>
          <div className='body-cp-md padding-bottom-1rem'>
            Not a user yet?
            <Link to='/signup'> 
              <span className='login-signup-text'>
              Create your account
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

