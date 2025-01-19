import React from 'react';  

const Foother = () => {  
  return (  
    <footer className='bg-gray-900 text-white py-10 px-4 md:px-8'>  
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>  
        {/* About Us Section */}  
        <div>  
          <h2 className='text-xl font-semibold mb-4'>About Us</h2>  
          <p className='text-sm text-gray-400'>  
            RKFood is dedicated to bringing the finest groceries and food products to your doorstep. We strive to deliver premium quality and authenticity in every product.  
          </p>  
        </div>  

        {/* Quick Links Section */}  
        <div>  
          <h2 className='text-xl font-semibold mb-4'>Quick Links</h2>  
          <ul className='text-sm text-gray-400 space-y-2'>  
            <li><a href='#' className='hover:text-white transition'>Home</a></li>  
            <li><a href='#' className='hover:text-white transition'>Shop</a></li>  
            <li><a href='#' className='hover:text-white transition'>About Us</a></li>  
            <li><a href='#' className='hover:text-white transition'>Contact</a></li>  
          </ul>  
        </div>  

        {/* Contact Section */}  
        <div>  
          <h2 className='text-xl font-semibold mb-4'>Contact Us</h2>  
          <p className='text-sm text-gray-400 mb-2'>Email: support@rkfood.com</p>  
          <p className='text-sm text-gray-400 mb-2'>Phone: +1 234 567 890</p>  
          <p className='text-sm text-gray-400'>Address: 123 Food Street, Gourmet City</p>  
        </div>  
      </div>  

      {/* Social Media & Copyright Section */}  
      <div className='mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center'>  
        {/* Social Media Icons */}  
        <div className='flex space-x-4'>  
          <a href='#' className='text-gray-400 hover:text-white transition'>  
            <i className='fab fa-facebook-f'></i>  
          </a>  
          <a href='#' className='text-gray-400 hover:text-white transition'>  
            <i className='fab fa-twitter'></i>  
          </a>  
          <a href='#' className='text-gray-400 hover:text-white transition'>  
            <i className='fab fa-instagram'></i>  
          </a>  
          <a href='#' className='text-gray-400 hover:text-white transition'>  
            <i className='fab fa-linkedin-in'></i>  
          </a>  
        </div>  

        {/* Copyright Text */}  
        <p className='text-sm text-gray-400 mt-4 md:mt-0'>  
          © {new Date().getFullYear()} RKFood. All Rights Reserved.  
        </p>  
      </div>  
    </footer>  
  );  
};  

export default Foother;  
