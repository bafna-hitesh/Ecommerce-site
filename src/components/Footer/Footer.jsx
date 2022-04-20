import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-header'>
        Made with
        <span class='primary-text-color'>
          <i class='fa-solid fa-heart'></i>
        </span>
        by Hitesh Bafna
      </div>
      <ul class='footer-social-icons'>
        <li class='list-inline-item'>
          <a
            class='link-no-style footer-links'
            href='https://github.com/hiteshjain27'
          >
            <i class='fab fa-github'></i>
          </a>
        </li>
        <li class='list-inline-item '>
          <a
            class='link-no-style footer-links'
            href='https://twitter.com/hitesh_jain27'
          >
            <i class='fab fa-twitter'></i>
          </a>
        </li>
        <li class='list-inline-item'>
          <a
            class='link-no-style footer-links'
            href='https://www.linkedin.com/in/bafna-hitesh/'
          >
            <i class='fab fa-linkedin-in'></i>
          </a>
        </li>
      </ul>
      <div className='footer-copy'>© 2021 Hitesh Bafna</div>
    </div>
  );
};

export default Footer;
/* 
    <footer class="footer text-center">
    <div class="footer-header">
        Made with <span class="primary-text-color">&lt;/&gt;</span> by Ankita Bagale
    </div>
    <ul class="inline-list list-style-none footer-social-icons">
        <li class="list-inline-item">
            <a class="link-no-style" href="https://github.com/AnkitaBagale">
                <i class="fab fa-github"></i>
            </a></li><li class="list-inline-item">
            <a class="link-no-style" href="https://twitter.com/AnkitaB1108">
                <i class="fab fa-twitter"></i>
            </a></li>
            <li class="list-inline-item">
                <a class="link-no-style" href="https://www.linkedin.com/in/ankita-bagale1108/">
                <i class="fab fa-linkedin-in">
            </i>
            </a>
        </li>
    </ul>
            <div class="text-light-weight body-cp-md footer-copy">
            © 2021 U
            <span class="primary-text-color body-cp-sm">&amp;</span>
            I Designs</div>
            </footer>
*/
