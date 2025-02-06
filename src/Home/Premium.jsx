import React from 'react';
import { Link } from 'react-router';

const Premium = () => {
  const items = [
    {
      path: '/Sourcing',
      label: 'Premium Sourcing',
      image: 'https://i.ibb.co.com/tzc9PnF/Group-30.png', 
    },
    {
      path: '/Production',
      label: 'Premium Production',
      image: 'https://i.ibb.co.com/pngYwcH/dried-coriander-seeds-powder-haldi-600nw-2258480165.webp', 
    },
    {
      path: '/Packaging',
      label: 'Premium Packaging',
      image: 'https://i.ibb.co.com/bBbd24r/Group-244.png', 
    },
    {
      path: '/Service',
      label: 'Premium Service',
      image: 'https://i.ibb.co.com/wgsrWJ4/Group-244.png', 
    },
  ];

  return (
    <div className="px-2 md:px-3 lg:px-20 pt-7 md:pt-9 xl:pt-20">
      <h1 className="text-center font-semibold text-2xl md:text-3xl md:pb-5 xl:pb-7">
        We Are Always <span className="text-orange-600">Premium</span>
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 text-sm py-5 cursor-pointer">
        {items.map((item, index) => (
          <Link to={item.path} key={index}>
            <div className="relative group">
              <img
                className="rounded-md h-48 md:h-52 lg:h-72 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                src={item.image}
                alt={item.label}
              />
              <p className="text-white font-bold text-base md:text-xl absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center w-full group-hover:text-yellow-400 transition-colors duration-300">
                {item.label}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Premium;
