'use client';
import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [showpassword, setShowPassword] = useState(false);

  return (
      <main className='container flex items-center justify-center min-h-screen  '>
      
          <div className="content shadow-xl px-6 py-4 ">

            <div className='mb-5'>
              <h2 className='text-xl text-center p-2 font-bold'>Sign In</h2>
              <p className='text-gray-600 text-lg'>Enter your credentials to access your account</p>
            </div>
          
              <div className="input_field flex flex-col mt-5 mb-5">
                <label htmlFor="email" className='mb-2 font-semibold'>Email</label>
                 <input type="email" placeholder='john@example.com' className=' p-2 border-gray-400 border w-full rounded-lg' />
              </div>


               <div className="input_field flex flex-col mt-5 mb-5">
                <label htmlFor="password" className='mb-2 font-semibold'>Password</label>
                 <input type="password" placeholder='*******' className=' p-2 border-gray-400 border w-full rounded-lg' />
              </div>
          

          <button className='w-full bg-[#171717] py-2 text-white'>Sign In</button>

          
          </div>
      </main>
  )
}

export default Login