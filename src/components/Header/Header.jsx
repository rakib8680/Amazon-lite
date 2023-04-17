import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <nav className='nav-bar'>
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className='nav-link'>

                <Link to='/' className='nav-link-hover'>Home</Link>
                <Link to='/order' className='nav-link-hover'>Orders</Link>
                <Link to='/checkout' className='nav-link-hover'>Checkout</Link>
                <Link to='/login' className='nav-link-hover'>Login</Link>
                <Link to='/registration' className='nav-link-hover'>Sign Up</Link>
            </div>
        </nav>
    );
};

export default Header;