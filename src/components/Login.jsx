
import React, { useContext, useState } from 'react';
import { Link,  useLocation, useNavigate, } from 'react-router-dom';
import { UserContext } from './Providers/AuthProvider';




const Login = () => {


    const { logIn, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'


    // error 
    const [error, setError] = useState('')


    // handle login 
    const handleLogin = event => {

        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;


        setError('')
        // login to existing account 
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                setUser(loggedUser)
                form.reset()
                navigate(from,  {replace : true})
            })
            .catch(err => {
                setError(err.message)
                console.log(err.message);
            })

    }




    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 p-5 md:p-0">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
                <form className="mt-4 space-y-4" onSubmit={handleLogin}>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-medium text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="w-4  h-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
                            <label htmlFor="remember" className="ml-2 text-sm text-gray-600 ">Remember me</label>
                        </div>
                        <Link to="/forgot-password" className="text-sm text-accent hover:underline">Forgot password?</Link>
                    </div>
                    <p className='font-normal text-error text-sm'>{error}</p>
                    <button type="submit" className="w-full p-2 text-white bg-primary rounded hover:bg-accent focus:outline-none focus:ring-2 focus:ring-orange-800">Login</button>
                </form>
                <p className="mt-4 text-center text-gray-600">Don't have an account? <Link to="/registration" className="text-accent hover:underline">Sign up</Link></p>
                <div className=' text-center my-3 text-slate-500'>

                    <p >or</p>

                </div>
                <div className="mt-4 flex items-center justify-center">
                    <button type="button" className="flex items-center p-2 bg-white border border-primary rounded hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400">
                        <img src="../../public/Google__G__Logo.svg" alt="Google logo" className="w-6 h-6 mr-2" />
                        <span className="text-accent font-medium">Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;