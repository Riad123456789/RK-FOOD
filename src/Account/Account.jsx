import React, { useState } from 'react'
import { Link } from 'react-router'

const Account = () => {

      

    const handleregister = e => {
        e.preventDefault();
        const Name = e.target.Name.value;
        const Email = e.target.Email.value;
        const password = e.target.password.value;

     console.log(Name,password,Email)
     
        
      }


  return (
    <div className='flex flex-col items-center justify-center py-2 bg-amber-100'>
      <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-sm'>
        <h1 className='text-2xl font-semibold mb-6 text-center text-amber-700'>
          Create an Account
        </h1>
        <p className='text-sm text-center text-gray-600 mb-4'>
          Join us to explore the finest spices!
        </p>
        <form onSubmit={handleregister} >
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-amber-800 text-sm font-medium mb-2'
            >
              Full Name
            </label>
            <input
              type='text'
              id='name'
              name='Name'
              placeholder='Enter your full name'
              className='w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none'
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-amber-800 text-sm font-medium mb-2'
            >
              Email Address
            </label>
            <input
              type='email'
              id='email'
              name='Email'
              placeholder='Enter your email'
              className='w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none'
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-amber-800 text-sm font-medium mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
              className='w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none'
            />
          </div>


              <button
            type='submit'
            className='w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition duration-200'
          >
            Register
          </button>
        </form>
        <p className='text-sm text-gray-600 text-center mt-4'>
          Already have an account?{' '}
          <Link
           to={"/Login"}
            className='text-amber-700 hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Account
