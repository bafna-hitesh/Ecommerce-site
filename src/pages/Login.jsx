import React, { useState } from 'react';

const Login = () => {
    const [isHide, setIsHide] = useState('Show');
    function clickHandler(){
        setIsHide(isHide === 'Show' ? 'Hide' : 'Show')
    }
  return (
      <>
        <div class="form-container">
            <h1 class="login-header">LOGIN</h1>
            <form class="login-form">
                <div class="row">
                    <input class="form-field" placeholder="Enter your email here" required=""/>
                </div>
                <div class="row">
                    <span class="input-with-show-btn">
                        <input class="form-field" placeholder="Enter your password here" type={isHide === 'Hide' ? 'text' : 'password'}/>
                        <button type="button" class="show-btn" onClick={clickHandler} tabindex="-1">
                            {isHide}
                        </button>
                    </span>
                </div>
                <button class="login-btn" type="submit">
                    LOGIN
                </button>
                <div class="body-cp-md padding-bottom-1rem">
                    Not a user yet? 
                    <a class="link-text link-text-primary" href="/signup">
                        Create your account
                    </a>
                </div>
            </form>
        </div>
      </>
  );
};

export default Login;

/* 

*/
