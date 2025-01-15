import React, { useState } from 'react'
import { MdOutlineFavoriteBorder, MdAccountCircle } from 'react-icons/md'
import { TbCategoryPlus } from 'react-icons/tb'
import { IoHome } from 'react-icons/io5'
import { AiOutlineProduct } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa6'
import { FaInstagramSquare } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../../public/rk logo.svg'
import TopBar from './TopBar'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className='flex flex-col min-h-screen relative'>
      {/* Top Bar */}
      <TopBar toggleSidebar={toggleSidebar}></TopBar>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[black] text-white w-72 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-30`}
      >
        <div className='flex justify-between items-center bg-orange-600 px-4'>
          <img className='w-14 h-14 ' src={Logo} alt='' />
          <button className='text-white text-xl' onClick={toggleSidebar}>
            ✕
          </button>
        </div>
        <div className='flex flex-col mt-10 space-y-4 px-4 '>
          <Link
            to='/'
            onClick={toggleSidebar}
            className='hover:text-orange-400'
          >
            <div className='flex items-center gap-2'>
              <IoHome size={20}></IoHome>
              Home
            </div>
          </Link>
          <Link
            to='/Wishlist'
            onClick={toggleSidebar}
            className='hover:text-orange-400'
          >
            <div className='flex items-center gap-2'>
              <MdOutlineFavoriteBorder size={20}></MdOutlineFavoriteBorder>
              Wishlist
            </div>
          </Link>
          <Link
            to='/Category'
            onClick={toggleSidebar}
            className='hover:text-orange-400'
          >
            <div className='flex items-center gap-2'>
              <TbCategoryPlus size={20}></TbCategoryPlus>
              Category
            </div>
          </Link>
          <Link
            to='/Product'
            onClick={toggleSidebar}
            className='hover:text-orange-400'
          >
            <div className='flex items-center gap-2'>
              <AiOutlineProduct size={20}></AiOutlineProduct>
              Product
            </div>
          </Link>
          <Link
            to='/Account'
            onClick={toggleSidebar}
            className='hover:text-orange-400'
          >
            <div className='flex items-center gap-2'>
              <MdAccountCircle size={20}></MdAccountCircle>
              Account
            </div>
          </Link>
        </div>

        <div className='pt-16 px-4 flex items-center gap-4'>
          <div className='bg-orange-600 p-3 rounded-full'>
            <FaFacebookSquare size={25}></FaFacebookSquare>
          </div>
          <div className='bg-orange-600 p-3 rounded-full'>
            <IoLogoYoutube size={25}></IoLogoYoutube>
          </div>
          <div className='bg-orange-600 p-3 rounded-full'>
            <FaLinkedin size={25}></FaLinkedin>
          </div>
          <div className='bg-orange-600 p-3 rounded-full'>
            <FaInstagramSquare size={25}></FaInstagramSquare>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-20'
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Dynamic Content */}
      <div className='flex-grow overflow-y-auto bg-white z-10 h-[1000px]'>
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <div className='bg-gray-100 rounded-t-md h-[10%] border-t border-orange-400 sticky bottom-0 z-20'>
        <div className='h-full flex items-center justify-around'>
          <Link to='/Wishlist'>
            <div className='flex flex-col items-center'>
              <MdOutlineFavoriteBorder size={18} color='#FF5733' />
              <p className='text-xs font-normal text-center'>Wishlist</p>
            </div>
          </Link>

          <Link to='/Category'>
            <div className='flex flex-col items-center'>
              <TbCategoryPlus size={18} color='#FF5733' />
              <p className='text-xs font-normal'>Category</p>
            </div>
          </Link>

          <Link to='/'>
            <div className='p-3 rounded-full drop-shadow-2xl border bg-slate-300 flex flex-col items-center'>
              <IoHome size={18} color='#FF5733' />
              <p className='text-xs font-normal'>Home</p>
            </div>
          </Link>

          <Link to='/Product'>
            <div className='flex flex-col items-center'>
              <AiOutlineProduct size={18} color='#FF5733' />
              <p className='text-xs font-normal'>Product</p>
            </div>
          </Link>

          <Link to='/Account'>
            <div className='flex flex-col items-center'>
              <MdAccountCircle size={18} color='#FF5733' />
              <p className='text-xs font-normal'>Account</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Layout
