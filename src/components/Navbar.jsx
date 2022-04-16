import React, {useRef} from 'react'

const Navbar = () => {
    const navRef = useRef(null);
    const navItems = [
		{ text: 'Home', link: '/', hideInDesktop: false },
		{ text: 'Shop Now', link: '/shop', hideInDesktop: false },
		{ text: 'Profile', link: '/profile', hideInDesktop: true },
		{ text: 'Orders', link: '/profile/orders', hideInDesktop: true },
		{ text: 'Addresses', link: '/profile/address', hideInDesktop: true },
		{ text: 'Settings', link: '/profile/settings', hideInDesktop: true },
	];
    return (
        <div ref={navRef} className='nav-container'>
            <div className='nav-section'>
                <div
					className='burger nav-section-items'
					onClick={() => {
						navRef.current.classList.toggle('active');
					}}>
					<div className='line1'></div>
					<div className='line2'></div>
					<div className='line3'></div>
				</div>
                <div className="navbar-logo">
                    ecommerce
                </div>
                <ul className='navbar-links'>
                    <li className='list-inline-item'>
                        <a aria-current="page" href="/">Home</a>
                    </li>
                    <li className='list-inline-item'>
                        <a href="/shop">Shop Now</a>
                    </li>
                </ul>
            </div>
            <div className="nav-section">
                <div className="search-bar ">
                    <button className="search-bar-btn link-no-style" type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                    <input className="search-bar-input" type="text" placeholder="Type to search" />
                </div>
                <ul className="nav-icons list-style-none nav-section-item-width50pc">
                    <li className="list-inline-item hide-profile-mobile">
                        <a className="nav-icon-link link-no-style" href="/profile">
                            <span className="nav-icon">
                                <i className="fas fa-user"></i>
                            </span>
                            <span className="nav-icon-text">Login</span>
                        </a>
                    </li>

                    {navItems.map(({ text, link, hideInDesktop }) => (
						<li
							key={text}
							className={`list-inline-item ${
								hideInDesktop ? 'hide-in-desktop' : ''
							}`}>
							{/* <NavLink
								end
								to={link}
								activeClassName='navlinks-active'
								className='navlinks-style text-left'>
								{text}
							</NavLink> */}
						</li>
					))}

                    <li className="list-inline-item display-flex vertical-middle">
                        <a className="nav-icon-link link-no-style text-regular-weight" href="/wishlist">
                            <span className="nav-icon badge-container">
                                <i className="fas fa-heart"></i>
                                <span className="status-badge status-badge-number">0</span>
                            </span>
                            <span className="nav-icon-text">Wishlist</span>
                        </a>
                    </li>
                    <li className="list-inline-item display-flex vertical-middle">
                        <a className="nav-icon-link link-no-style text-regular-weight " href="/cart">
                            <span className="nav-icon  badge-container">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="status-badge status-badge-number">0</span>
                            </span>
                            <span className="nav-icon-text">Cart</span>
                        </a>
                    </li>
                </ul>    
            </div>
        </div>
    )
}

export default Navbar
