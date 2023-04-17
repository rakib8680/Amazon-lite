import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg'
import { UserContext } from '../Providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(UserContext)


    // handleLogOut 
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => {
                console.log(err.message)
            })
    }


    return (
        <nav className='nav-bar'>
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className='nav-link'>

                <Link to='/' className='nav-link-hover'>Home</Link>
                <Link to='/order' className='nav-link-hover'>Orders</Link>
                <Link to='/checkout' className='nav-link-hover'>Checkout</Link>
                <Link to='/login' className='nav-link-hover'>Login</Link>
                <Link to='/registration' className='nav-link-hover'>Sign Up</Link>
                {
                    user && <span>{user.email} <button className='nav-link-hover pl-3' onClick={handleLogOut}>Log Out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;