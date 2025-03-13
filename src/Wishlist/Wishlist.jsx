import React, { useContext, useEffect } from 'react';
import { WishlistContext } from '../ContextApi/WishlistContext';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <div className='px-4 pt-16'>
      <h1 className='text-center font-semibold text-xl md:text-3xl md:pb-5 xl:pb-12 py-5'>
        Your Wishlist <span className='text-orange-600'>RK FOOD</span>
      </h1>

      {wishlist.length === 0 ? (
        <p className='text-center text-gray-500 text-lg py-10'>
          Your wishlist is empty!
        </p>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8'>
          {wishlist.map((item) => (
            <div
              key={item.id}
              className='border rounded-lg hover:shadow-xl transition-shadow duration-300 shadow-md bg-white p-3 sm:p-4'
            >
              <Link to={`/ProductDetails/${item.id}`}>
                <div className='cursor-pointer'>
                  <div className='w-full h-32 sm:h-36 md:h-40 mx-auto overflow-hidden flex justify-center'>
                    <img
                      src={item.image_url}
                      alt={item.name}
                      loading='lazy'
                      className='w-auto h-full object-contain transition-transform duration-300 hover:scale-105'
                    />
                  </div>

                  <div className='text-center mt-2'>
                    <h3 className='font-semibold text-gray-800 text-sm sm:text-lg'>{item.name}</h3>
                    <div className='flex items-center justify-between text-gray-600 text-xs sm:text-sm mt-1'>
                      <p>{item.weight}</p>
                      <div className='flex items-center text-orange-600 font-bold text-sm sm:text-lg'>
                        <TbCurrencyTaka size={16} className='sm:size-20' />
                        <p>{item.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className='mt-4 w-full bg-red-500 text-white py-2 sm:py-3 rounded-md hover:bg-red-600 transition duration-300 text-xs sm:text-sm md:text-base'
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;