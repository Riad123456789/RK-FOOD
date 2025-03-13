import React, { useContext } from 'react'
import { WishlistContext } from '../ContextApi/WishlistContext'

const ComponentWithModal = ({ isModalOpen, modalContent, closeModal }) => {
  const { addToWishlist } = useContext(WishlistContext)

  const handleAddToWishlist = modalContent => {
    addToWishlist(modalContent.details)
  }

  return (
    <>
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'>
          <div className='bg-white max-w-lg md:max-w-3xl w-full h-auto max-h-[90vh] rounded-lg p-6 relative overflow-y-auto shadow-lg'>
            <h2 className='text-lg md:text-2xl font-bold mb-4 text-center border-b pb-2'>
              {modalContent?.details.name}
            </h2>
            
            <div className='flex flex-col md:flex-row items-center md:items-start gap-6 pt-3'>
              {/* Image section */}
              <div className='flex flex-col items-center space-y-4'>
                <img
                  className='w-16 h-20 rounded-md shadow-inner bg-[#fff6e6] py-2 px-3'
                  src={modalContent?.details.image_url}
                  alt=''
                />
                <img
                  src={modalContent?.details.image_url}
                  alt={modalContent?.details.name}
                  className='w-40 h-64 md:w-56 md:h-96  rounded-lg'
                />
              </div>

              {/* Details section */}
              <div className='w-full md:w-2/3 space-y-4'>
                <h1 className='text-xl md:text-2xl font-bold'>{modalContent?.details.name}</h1>
                <p className='text-sm text-gray-600'>Brand: RK FOOD</p>
                <p className='text-xl font-semibold'>
                  <strong>$</strong> {modalContent?.details.price}
                </p>
                <p className='text-base'>Variations: {modalContent?.details.variations || 'N/A'}</p>
                <p>
                  <strong>Quantity:</strong> {modalContent?.details.weight}
                </p>
                <p>
                  <strong>Rating:</strong> {modalContent?.details.rating}
                </p>

                <button
                  onClick={() => handleAddToWishlist(modalContent)}
                  className='my-4 px-4 py-3 rounded-md text-white font-semibold text-sm w-full bg-orange-500 hover:bg-orange-600 transition duration-300'
                >
                  Add to Wishlist
                </button>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={closeModal}
              className='absolute top-2 right-2 text-black hover:text-red-600 text-2xl font-bold'
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ComponentWithModal
