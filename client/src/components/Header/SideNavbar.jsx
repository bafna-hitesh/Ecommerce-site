import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SideNavbar = ({ setShowSidebar }) => {
  const {
    authState: { token, user }
 } = useAuth();

 const logRoute = token ? `Hi, ${user?.firstname}` : "login";

  const navItems = [
    { text: 'Home', link: '/' },
    { text: 'Shop Now', link: '/products' },
    { text: 'Account', link: '/account'},
  ];

  return (
    <>
      <nav className='side-bar'>
        <div className='sidebar-header'>
          <div className='sidebar-top'>
            <div className='sidebar-login'>
              <Link to={`/${logRoute}`}>
                <i className='fas fas-sidebar fas-sidebar-user fa-user'></i>
                <span className='sidebar-user-text'>
                {logRoute}
                </span>
              </Link>
            </div>

            <div className='sidebar-close'>
              <button
                onClick={() => setShowSidebar(false)}
                type='button'
                id='sidebarCollapseX'
                className='btn btn-link btn-close'
              >
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>

        <ul className='sidebar-links'>
          {navItems.map((item) => (
            <li key={item.text}>
              <NavLink 
                to={item.link}
                className={({ isActive }) => isActive ? "activeClassName" : ""
            }
              >
                <i className={item.iconClassName}></i>
                <span className='sidebar-link'>{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SideNavbar;
