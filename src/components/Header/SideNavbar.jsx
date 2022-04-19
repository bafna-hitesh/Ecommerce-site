import React from 'react'
import { Link } from 'react-router-dom';

const SideNavbar = ({setShowSidebar}) => {
    const navItems = [
		{ text: 'Home', link: '/', hideInDesktop: false },
		{ text: 'Shop Now', link: '/shop', hideInDesktop: false },
		{ text: 'Profile', link: '/profile', hideInDesktop: true },
		{ text: 'Orders', link: '/profile/orders', hideInDesktop: true },
		{ text: 'Addresses', link: '/profile/address', hideInDesktop: true },
		{ text: 'Settings', link: '/profile/settings', hideInDesktop: true },
	];
  return (
        <>
            <nav className='side-bar'>
                <div className='sidebar-header'>
                    <div className='sidebar-top'>
                        <div className='sidebar-login'>
                            <Link to= '/'>
                            <i className='fas fas-sidebar fas-sidebar-user fa-user'></i>
                            Log In
                            </Link>
                        </div>

                        <div className='sidebar-close'>
                            <button
                            onClick={() => setShowSidebar(false)}
                            type='button'
                            id='sidebarCollapseX'
                            className='btn btn-link btn-close'>
                            <i className='fas fa-times'></i>
                            </button>
                        </div>
                    </div>
                </div>

                <ul className='sidebar-links'>
                    {navItems.map((item) => (
                        <li key={item.text}>
                            <Link to={item.link}>
                                <i className={item.iconClassName}></i>
                                <span className='sidebar-link'>{item.text}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
  )
}

export default SideNavbar