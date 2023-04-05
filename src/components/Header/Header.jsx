import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <nav className='md:h-20 bg-slate-800 text-white md:flex md:justify-between p-10  md:px-32 items-center md:sticky top-0 z-10 md:backdrop-filter md:backdrop-blur-md md:bg-opacity-70'>
            <img src={logo} alt="" />
            <div className='flex md:flex-row flex-col gap-3 md:gap-10 mt-8  md:mt-0'>

                <Link to='/' className='nav-link-hover'>Home</Link>
                <Link to='/order' className='nav-link-hover'>Order</Link>
                <Link to='/inventory' className='nav-link-hover'>Inventory</Link>
                <Link to='/login' className='nav-link-hover'>Login</Link>
            </div>
        </nav>
    );
};

export default Header;