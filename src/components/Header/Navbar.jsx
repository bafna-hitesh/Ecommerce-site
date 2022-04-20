import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import SideNavbar from './SideNavbar';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className='nav-container'>
      {showSidebar && <SideNavbar setShowSidebar={setShowSidebar} />}

      <div className='nav-section'>
        <div
          className={`burger nav-section-items `}
          onClick={() => {
            setShowSidebar(true);
          }}
        >
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>

        <div className='navbar-logo'>
          <Link to='/'>ecommerce</Link>
        </div>

        <ul className='navbar-links'>
          <li className='list-inline-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='list-inline-item'>
            <Link to='/products'>Shop Now</Link>
          </li>
        </ul>
      </div>
      <div className='nav-section nav-right-side'>
        <div className='search-bar '>
          <button className='search-bar-btn link-no-style' type='submit'>
            <i className='fa fa-search'></i>
          </button>
          <input
            className='search-bar-input'
            type='text'
            placeholder='Type to search'
          />
        </div>
        <ul className='nav-icons list-style-none nav-section-item-width50pc'>
          <li className='list-inline-item hide-login-mobile'>
            <Link to='/login' className='nav-icon-link link-no-style'>
              <span className='nav-icon'>
                <i className='fas fa-user'></i>
              </span>
              <span className='nav-icon-text'>Login</span>
            </Link>
          </li>
          <li className='list-inline-item display-flex vertical-middle'>
            <Link
              className='nav-icon-link link-no-style text-regular-weight'
              to='/wishlist'
            >
              <span className='nav-icon badge-container'>
                <i className='fas fa-heart'></i>
                <span className='status-badge status-badge-number'>0</span>
              </span>
              <span className='nav-icon-text'>Wishlist</span>
            </Link>
          </li>
          <li className='list-inline-item display-flex vertical-middle'>
            <Link to='/cart' className='nav-icon-link link-no-style'>
              <span className='nav-icon  badge-container'>
                <i className='fas fa-shopping-cart'></i>
                <span className='status-badge status-badge-number'>12</span>
              </span>
              <span className='nav-icon-text'>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
