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
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30'>
          <div className='bg-[#ffffff] w-[97%]  h-[80vh] rounded-lg p-4 relative overflow-y-auto shadow-lg'>
            <h2 className='text-lg font-bold mb-4 text-center border-b pb-2 '>
              {modalContent?.details.name}
            </h2>
            <div className='space-y-4 pt-3'>
              <div className='flex justify-around'>
                <img
                  className='w-16 h-20  rounded-[4px] shadow-inner  bg-[#fff6e6] py-2 px-3'
                  src={modalContent?.details.image_url}
                  alt=''
                />
                <img
                  src={modalContent?.details.image_url}
                  alt={modalContent?.details.name}
                  className='w-40 h-64 '
                />
              </div>
              <div className='px-8 '>
                <p className=' pt-5'>
                  <h1 className='text-xl font-bold'>
                    {modalContent?.details.name}
                  </h1>
                </p>
                <p className='text-sm text-[#6b6b6b] pt-6'>Brand : RK FOOD</p>
                <p className='text-xl font-semibold pt-3'>
                  <strong>$</strong> {modalContent?.details.price}
                </p>
                <p className='text-base  pt-6'>Variations :</p>
                <p className='pt-2'>
                  <strong>Quantity :</strong> {modalContent?.details.weight}
                </p>
                <p className='pt-2'>
                  <strong>Rating :</strong> {modalContent?.details.rating}
                </p>

                <button
                  onClick={() => handleAddToWishlist(modalContent)}
                  className='my-7 px-3 py-3 rounded-md text-white font-semibold text-sm w-full bg-[#ed672e] border cursor-pointer'
                >
                  {' '}
                  Add to Wishlist
                </button>
              </div>
            </div>
            <button
              onClick={closeModal}
              className='absolute top-2 right-2 text-black hover:text-red-600 text-2xl font-bold '
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
