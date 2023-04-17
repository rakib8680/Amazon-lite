import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
                <form className="mt-4 space-y-4">
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
}

export default Login;