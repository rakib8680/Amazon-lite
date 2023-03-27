import React from 'react';
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <nav className='h-20 bg-slate-800 text-white flex justify-between px-32 items-center'>
            <img src={logo} alt="" />
            <div className='flex gap-10'>
                <a href="/shop" className=' hover:text-orange-300'>Order</a>
                <a href="/order" className=' hover:text-orange-300'>Order Review</a>
                <a href="/inventory" className=' hover:text-orange-300'>Manage Inventory</a>
                <a href="/login" className=' hover:text-orange-300'>Login</a>
            </div>
        </nav>
    );
};

export default Header;