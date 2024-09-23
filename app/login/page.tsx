"use client"
import React, { useState } from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image'
import Afrikabal from '@/images/afrikabal.png'

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [showPassword, setShowPassword] = useState(false);

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
  };

  return (
    <div className="bg-white  min-h-screen h-full relative">
      <div className='fixed top-0 left 0 shadow-md w-full h-16 px-6 py-2 bg-white z-[1000]'>
        <Link href='/landing'>
          <Image alt="Afrikabal logo" src={Afrikabal} width={60} height={60} />
        </Link>
      </div>

      <div className='w-1/3 h-12 bg-green-50 absolute left-24 top-20 rounded-md text-xs mt-6 shadow-md'>
        <div className='text-green-600 px-6'>
          <div className=''>
            <FaLock />
          </div>
          <div className='flex flex-col justify-normal mx-6'>
            <p className=''>Please check that you are visiting the correct URL</p>
            <Link href="/login" className='font-extrabold'>https://app.afrikabal.com</Link>
          </div>
        </div>
      </div>

      <form 
        onSubmit={handleSubmit} 
        className='flex flex-col md:flex-wrap justify-between absolute left-24 top-32 px-6 py-6 bg-white rounded-md w-1/3 border border-black/10 shadow-md mt-10'
      >
        <div>
        <p className='text-black font-semibold text-lg'>Sign in to Afrikabal</p>
          <p className='text-black/50 font-light text-xs text-left w-72 md:block'>To sign in, please type in the email address linked to your Afrikabal account.</p>
        </div>

        <div className='flex flex-col my-3'>
          <label className='text-black/80 font-light text-sm'>Email Address</label>
          <input 
            type="email"
            placeholder='example@gmail.com'
            className='bg-white/70 text-black/80 shadow-md rounded-sm text-xs font-light py-2 px-4 my-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>

        <div className='flex flex-col my-3'>
          <label className='text-black/80 font-light text-sm'>Password</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            placeholder='.............'
            className='bg-white/70 text-black/80 shadow-md rounded-sm text-base font-semibold py-2 px-4 my-2'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          {
            showPassword ? 
              <FaEye className='absolute bottom-45 mb-4 right-12 text-black/50 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
            : 
              <IoMdEyeOff className='absolute bottom-45 mb-4 right-12 text-black/50 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
          }
        </div>
        <div className='inline text-xs'>
          <span className='text-black/50'>Forgot password?</span>
          <Link href="/reset" className='text-green-600'>Reset it</Link>
        </div>

        <button type="submit" className='bg-green-600 rounded-md text-white text-sm font-semibold my-3 text-center py-1 w-1/3 h-12'>
          Sign in
        </button>
        <div className='text-xs text-black/50'>
          If you don't have a Kuda account, download the app <Link href="https://bit.ly/getAfrikabal" className='text-green-600'>here</Link> and open an account in a few minutes.
        </div>
      </form>
    </div>
  )
}

export default Login;
