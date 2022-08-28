import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import './Navbar.css';
import SideNavbar from './SideNavbar';
import logo from './logo.png'

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const { state } = useData();
  const { wishList, cart } = state;

  const {
     authState: { token }
  } = useAuth();

  const logRoute = token ? "account" : "login";

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
          <Link to='/'>
            <img 
              src={logo}
              alt='unidzyn logo'
              id='navbar-logo'
            />
          </Link>
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
            <Link to={`/${logRoute}`} className='nav-icon-link link-no-style'>
              <span className='nav-icon'>
                <i className='fas fa-user'></i>
              </span>
              <span className='nav-icon-text'>{logRoute}</span>
            </Link>
          </li>

          <li className='list-inline-item display-flex vertical-middle'>
            <Link
              className='nav-icon-link link-no-style text-regular-weight'
              to='/wishlist'
            >
              <span className='nav-icon badge-container'>
                <i className='fas fa-heart'></i>
                {token && (
                  <span className='status-badge status-badge-number'>{wishList.length}</span>
                )}
                
              </span>
              <span className='nav-icon-text'>Wishlist</span>
            </Link>
          </li>

          <li className='list-inline-item display-flex vertical-middle'>
            <Link to='/cart' className='nav-icon-link link-no-style'>
              <span className='nav-icon  badge-container'>
                <i className='fas fa-shopping-cart'></i>
              {token && (
                <span className='status-badge status-badge-number'>{cart.length}</span>
              )}
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
