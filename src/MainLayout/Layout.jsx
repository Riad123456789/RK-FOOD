import React, { useState, useContext } from 'react'
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
import { WishlistContext } from '../ContextApi/WishlistContext'
import Foother from '../Foother/Foother'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { wishlist } = useContext(WishlistContext)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const socialLinks = [
    { icon: <FaFacebookSquare size={25} />, url: 'https://www.facebook.com' },
    { icon: <IoLogoYoutube size={25} />, url: 'https://www.youtube.com' },
    { icon: <FaLinkedin size={25} />, url: 'https://www.linkedin.com' },
    { icon: <FaInstagramSquare size={25} />, url: 'https://www.instagram.com' }
  ]

  return (
    <div className='flex flex-col min-h-screen relative'>
      <div className='w-full h-9 bg-[#fe6c23]  items-center justify-between px-20 hidden lg:flex'>
        <div>
          <p className='text-xs font-semibold text-[white]'>
            Office Time : 08:00 AM - 12:00 AM | Hotline : +8801795579568
          </p>
        </div>
        {/* Social Media Icons */}
        <div className='hidden lg:flex items-center gap-1'>
          {[
            {
              Icon: FaFacebookSquare,
              url: 'https://www.facebook.com/rktrading.com.bd'
            },
            {
              Icon: IoLogoYoutube,
              url: 'https://www.youtube.com/@rktrading873'
            },
            { Icon: FaLinkedin, url: 'https://www.linkedin.com' },
            {
              Icon: FaInstagramSquare,
              url: 'https://www.instagram.com/rktradingbd'
            }
          ].map(({ Icon, url }, index) => (
            <a
              key={index}
              href={url}
              // target='_blank'
              rel='noopener noreferrer'
              className=' p-2 rounded-full cursor-pointer transition-transform transform hover:scale-110'
            >
              <Icon size={20} color='white' />
            </a>
          ))}
        </div>
      </div>

      {/* Top Bar */}
      <TopBar toggleSidebar={toggleSidebar}></TopBar>

      <div className='h-14 w-full bg-[#f3f3f3] items-center hidden lg:flex px-20'>
        <div className='flex items-center gap-6 text-xs font-semibold'>
          <Link to='/' className='hover:text-orange-400'>
            HOME
          </Link>
          <Link to='/Product' className='hover:text-orange-400'>
            ALL PRODUCTS
          </Link>
          <Link to='/Aboutus' className='hover:text-orange-400'>
            ABOUT US
          </Link>
          <Link to='/Contactus' className='hover:text-orange-400'>
            CONTACT US
          </Link>
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[black] text-white w-72 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-30`}
      >
        <div className='flex justify-between items-center bg-orange-600 px-4 py-1'>
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
              HOME
            </div>
          </Link>
          <Link
            to='/Aboutus'
            onClick={toggleSidebar}
            className='hover:text-orange-400'
          >
            <div className='flex items-center gap-2'>
              <MdOutlineFavoriteBorder size={20}></MdOutlineFavoriteBorder>
              ABOUT US
            </div>
          </Link>
          <Link
            to='/Contactus'
            onClick={toggleSidebar}
            className='hover:text-orange-400'
          >
            <div className='flex items-center gap-2'>
              <TbCategoryPlus size={20}></TbCategoryPlus>
              CONTACT US
            </div>
          </Link>
          <Link
            to='/Product'
            onClick={toggleSidebar}
            className='hover:text-orange-400'
          >
            <div className='flex items-center gap-2 uppercase'>
              <AiOutlineProduct size={20}></AiOutlineProduct>
              Product
            </div>
          </Link>
          <Link
            to='/Account'
            onClick={toggleSidebar}
            className='hover:text-orange-400'
          >
            <div className='flex items-center gap-2 uppercase' >
              <MdAccountCircle size={20}></MdAccountCircle>
              Account
            </div>
          </Link>
        </div>

        <div className='pt-16 px-4 flex items-center gap-4'>
          <div className='bg-orange-600 p-3 rounded-full'>
            <Link to={'https://www.facebook.com/rktrading.com.bd'}>
              {' '}
              <FaFacebookSquare size={25}></FaFacebookSquare>
            </Link>
          </div>
          <div className='bg-orange-600 p-3 rounded-full'>
            <Link to={'https://www.youtube.com/@rktrading873'}>
              {' '}
              <IoLogoYoutube size={25}></IoLogoYoutube>
            </Link>
          </div>
          <div className='bg-orange-600 p-3 rounded-full'>
            <Link to={'https://www.linkedin.com'}>
              {' '}
              <FaLinkedin size={25}></FaLinkedin>
            </Link>
          </div>
          <div className='bg-orange-600 p-3 rounded-full'>
            <Link to={'https://www.instagram.com/rktradingbd'}>
              {' '}
              <FaInstagramSquare size={25}></FaInstagramSquare>
            </Link>
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
      <div className='flex-grow overflow-y-auto bg-white z-10 '>
        <Outlet />
      </div>

      <div>
        <Foother></Foother>
      </div>

      {/* Bottom Navigation */}
      <div className='bg-gray-100 rounded-t-md h-[10%] border-t border-orange-400 sticky bottom-0 z-20 block lg:hidden'>
        <div className='h-full flex items-center justify-around'>
          <Link to='/Wishlist'>
            <div className='flex flex-col items-center relative'>
              <MdOutlineFavoriteBorder size={18} color='#FF5733' />
              <p className='text-xs font-normal text-center'>Wishlist</p>
              <span className='absolute -top-1 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center'>
                {wishlist.length}
              </span>
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
