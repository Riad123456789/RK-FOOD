import React, { useContext, useEffect } from 'react';
import { WishlistContext } from '../ContextApi/WishlistContext'; // Import WishlistContext

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext); // Access wishlist and removeFromWishlist from context

  useEffect(() => {
    // Sync wishlist to local storage whenever it changes
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]); // Re-run this effect when wishlist changes

  return (
    <div className='py-10 px-5'>
      <h2 className='text-center text-2xl font-semibold mb-6'>Your Wishlist</h2>

      {/* Show a message if the wishlist is empty */}
      {wishlist.length === 0 ? (
        <p className='text-center text-gray-500'>Your wishlist is empty!</p>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {wishlist.map((item) => (
            <div
              key={item.id}
              className='border rounded-sm shadow-md hover:shadow-lg bg-white'
            >
              <div className='w-full bg-gray-100 pb-2 pt-7'>
                <img
                  src={item.image_url}
                  alt={item.name}
                  className='w-20 h-28 rounded-md mb-3 mx-auto'
                />
              </div>
              <div className='px-3 py-4 space-y-1'>
                <h3 className='font-medium text-gray-700 text-sm'>
                  {item.name}
                </h3>
                <p className='text-sm text-gray-500'>{item.weight}</p>
                <p className='font-bold'>$ {item.price}</p>

                <div className='pt-2'>
                  <button
                    onClick={() => {
                      removeFromWishlist(item.id); // Call removeFromWishlist from context
                      alert(`${item.name} removed from wishlist.`);
                    }}
                    className='text-xs font-semibold bg-red-600 text-white text-center w-full py-2 rounded-sm'
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
