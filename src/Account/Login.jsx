import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center py-5 ">
        <div className="bg-amber-100 shadow-md rounded-lg p-8 w-full max-w-sm">
            <h1 className="text-2xl font-semibold mb-6 text-center text-amber-700">Welcome Back</h1>
            <p className="text-sm text-center text-gray-600 mb-4">
                Login to access the best spice deals!
            </p>
            <form>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-amber-800 text-sm font-medium mb-2"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-amber-800 text-sm font-medium mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition duration-200"
                >
                    Login
                </button>
            </form>
            <p className="text-sm text-gray-600 text-center mt-4">
                Don't have an account?{' '}
                <Link
                    to={"/Account"}
                    className="text-amber-700 hover:underline"
                >
                    Sign up
                </Link>
            </p>
        </div>
    </div>
    
    );
};

export default Login;