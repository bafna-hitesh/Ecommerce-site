import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-header'>
        Made with
        <span className='primary-text-color'>
          <i className='fa-solid fa-heart'></i>
        </span>
        by Hitesh Bafna
      </div>
      <ul className='footer-social-icons'>
        <li className='list-inline-item'>
          <a
            className='link-no-style footer-links'
            href='https://github.com/hiteshjain27'
          >
            <i className='fab fa-github'></i>
          </a>
        </li>
        <li className='list-inline-item '>
          <a
            className='link-no-style footer-links'
            href='https://twitter.com/hitesh_jain27'
          >
            <i className='fab fa-twitter'></i>
          </a>
        </li>
        <li className='list-inline-item'>
          <a
            className='link-no-style footer-links'
            href='https://www.linkedin.com/in/bafna-hitesh/'
          >
            <i className='fab fa-linkedin-in'></i>
          </a>
        </li>
      </ul>
      <div className='footer-copy'>© 2021 Hitesh Bafna</div>
    </div>
  );
};

export default Footer;
