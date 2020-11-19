import React from 'react';
import logo from '../../Images/Group 86.png';
import './Menu.css';

const Menu = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-white mb-4'>
            <a className='navbar-brand' href='/'>
                <img className='logo' src={logo} alt='' />
            </a>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav ml-auto'>
                    <a className='nav-link active mr-3' href='/'>
                        Home
                    </a>
                    <a className='nav-link mr-3' href='#about'>
                        About
                    </a>
                    <a className='nav-link mr-3' href='#services'>
                        Services
                    </a>
                    <a className='nav-link mr-3' href='#pricing'>
                        Pricing
                    </a>
                    <a className='nav-link mr-3' href='#team'>
                        Our Team
                    </a>
                    <a className='nav-link ' href='#contact'>
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
