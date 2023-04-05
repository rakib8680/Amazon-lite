import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <nav className='nav-bar'>
            <img src={logo} alt="" />
            <div className='nav-link'>

                <Link to='/' className='nav-link-hover'>Home</Link>
                <Link to='/order' className='nav-link-hover'>Order</Link>
                <Link to='/inventory' className='nav-link-hover'>Inventory</Link>
                <Link to='/login' className='nav-link-hover'>Login</Link>
            </div>
        </nav>
    );
};

export default Header;