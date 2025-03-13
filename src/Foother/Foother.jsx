import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';
import img from '../../public/foother.JPG';

const Footer = () => {
  return (
    <footer
      className="relative bg-gray-900 text-white pt-14 px-5 md:pt-32 pb-10 md:px-8"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0A482C] bg-opacity-95"></div>

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm text-[white]">
            RKFood is dedicated to bringing the finest groceries and food products to your doorstep.
            We strive to deliver premium quality and authenticity in every product.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-sm text-[white] space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Shop</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm text-[white] mb-2">Email: rkfoodbd@gmail.com</p>
          <p className="text-sm text-[white] mb-2">Phone: +8801795579568</p>
        </div>

        {/* Our Address */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Address</h2>
          <div className="flex items-start gap-3 text-sm text-[white]">
            <FaMapMarkerAlt className="text-lg text-orange-400" />
            <p>House# 517/1, Jahangir Monjil, Jhikira, Wapda Road, (Nearby to Grameen Bank Branch & Area Office), Ullapara, Sirajgonj, BD</p>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="relative mt-10 px-12 py-4 border-t-2 border-b-2  border-[white] pt-6 flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/rktrading.com.bd" className="text-[white] hover:text-white transition text-xl border rounded-full p-1">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/rktradingbd777" className="text-[white] hover:text-white transition text-xl border rounded-full p-1">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/rktradingbd" className="text-[white] hover:text-white transition text-xl border rounded-full p-1">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" className="text-[white] hover:text-white transition text-xl border rounded-full p-1">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-[white] mt-4 md:mt-0">
          © {new Date().getFullYear()} RKFood. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
