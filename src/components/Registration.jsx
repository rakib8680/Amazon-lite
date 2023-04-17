import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {


    // error 
    const [error, setError] = useState('')

    // success 
    const [success, setSuccess] = useState('')




    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value







        // password validation 
        setError('')
        setSuccess('')



        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please provide one upperCase word')
            return
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Please provide at least one number')
            return
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters or above')
            return
        }
        else if (password != confirm) {
            setError("Password didn't matched");
            return
        }

        setSuccess('User Created Successfully')
        console.log(email, password, confirm)

    }







    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800">Sign Up</h1>
                <form className="mt-4 space-y-4" onSubmit={handleSignUp}>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-medium text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirm" className="text-sm font-medium text-gray-600">Confirm Password</label>
                        <input type="password" id="confirm_password" name="confirm" className="p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="w-4  h-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
                            <label htmlFor="remember" className="ml-2 text-sm text-gray-600 ">Remember me</label>
                        </div>
                    </div>
                    <p className='font-normal text-error text-sm'>{error}</p>
                    <button type="submit" className="w-full p-2 text-white bg-primary rounded hover:bg-accent focus:outline-none focus:ring-2 focus:ring-orange-800">Sign Up</button>
                </form>
                <p className="mt-4 text-center text-gray-600">Already have an account? <Link to="/login" className="text-accent hover:underline">Log in</Link></p>
                <div className=' text-center my-3 text-slate-500'>

                    <p >or</p>

                </div>
                <div className="mt-4 flex items-center justify-center">
                    <button type="button" className="flex items-center p-2 bg-white border border-primary rounded hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400">
                        <img src="../../public/Google__G__Logo.svg" alt="Google logo" className="w-6 h-6 mr-2" />
                        <span className="text-accent font-medium">Continue with Google</span>
                    </button>
                </div>
                <p className='text-green-600 font-normal text-center mt-7'>{success}</p>
            </div>
        </div>
    );
};

export default Registration;