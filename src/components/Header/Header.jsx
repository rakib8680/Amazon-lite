import React from 'react';
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <nav className='md:h-20 bg-slate-800 text-white md:flex md:justify-between p-10  md:px-32 items-center'>
            <img src={logo} alt="" />
            <div className='flex md:flex-row flex-col gap-3 md:gap-10 mt-8  md:mt-0'>
                <a href="/shop" className='nav-link-hover'>Order</a>
                <a href="/order" className='nav-link-hover'>Order Review</a>
                <a href="/inventory" className='nav-link-hover'>Manage Inventory</a>
                <a href="/login" className='nav-link-hover'>Login</a>
            </div>
        </nav>
    );
};

export default Header;