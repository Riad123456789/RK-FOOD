import React, { useState, useEffect, useContext } from 'react'
import { WishlistContext } from '../ContextApi/WishlistContext'
import { Link } from 'react-router-dom'
import { TbCurrencyTaka } from 'react-icons/tb'
import { IoClose } from 'react-icons/io5'

const Featuredproducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { addToWishlist } = useContext(WishlistContext)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch('/Fackdata.json')
        if (!response.ok) throw new Error('Failed to fetch data')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching featured products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, [])

  const handleAddToWishlist = product => {
    addToWishlist(product)
  }

  const openModal = product => {
    setSelectedProduct(product)
    setMainImage(product.image_url)
  }

  const closeModal = () => {
    setSelectedProduct(null)
    setMainImage(null)
  }

  return (
    <div className='px-4 md:px-2 lg:px-20 pt-5'>
      <h1 className='text-center font-semibold text-xl md:text-3xl md:pb-5 xl:pb-12 py-5'>
        Featured Products From <span className='text-orange-600'>RK FOOD</span>
      </h1>

      {loading ? (
        <div className='text-center text-gray-500'>Loading products...</div>
      ) : (
        <div className='pt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-8'>
          {products.slice(0, 8).map(product => (
            <div
              key={product.id}
              className='group relative rounded-2xl bg-white/70 backdrop-blur-md border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2'
            >
              {/* IMAGE SECTION */}
              <Link to={`/ProductDetails/${product.id}`}>
                <div className='relative w-full h-40 flex items-center justify-center bg-gradient-to-b from-orange-50 to-white overflow-hidden'>
                  <img
                    src={product.image_url}
                    alt={product.name}
                    loading='lazy'
                    className='w-28 h-28 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2'
                  />

                  {product.price && (
                    <div className='absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full shadow'>
                      ৳ {product.price}
                    </div>
                  )}
                </div>
              </Link>

              {/* TEXT */}
              <div className='px-4 py-3 space-y-1 text-center'>
                <h3 className='font-semibold text-gray-800 text-sm md:text-base line-clamp-1'>
                  {product.name}
                </h3>

                <p className='text-xs text-gray-500'>{product.weight}</p>
              </div>

              {/* BUTTONS */}
              <div className='p-3 flex gap-2'>
                <button
                  onClick={() => handleAddToWishlist(product)}
                  className='flex-1 text-xs font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 rounded-md shadow hover:scale-105 transition'
                >
                  ❤️ Wishlist
                </button>

                <button
                  onClick={() => openModal(product)}
                  className='flex-1 text-xs font-medium bg-gradient-to-r from-green-600 to-green-700 text-white py-2 rounded-md shadow hover:scale-105 transition'
                >
                  👀 View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}
      {selectedProduct && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2 py-2 mt-3 md:mt-0'
          onClick={closeModal}
        >
          <div
            className='bg-white rounded-sm max-w-4xl w-full relative overflow-hidden shadow-xl mx-2 md:mx-0'
            onClick={e => e.stopPropagation()}
          >
            <div className='bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 flex justify-between items-center'>
              <Link to={`/ProductDetails/${selectedProduct.id}`}>
                <h2 className='text-sm font-semibold cursor-pointer hover:underline'>
                  More Details
                </h2>
              </Link>

              <button
                onClick={closeModal}
                className='text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-80'
              >
                <IoClose size={20} />
              </button>
            </div>

            <div className='flex flex-col md:flex-row px-4 md:px-20 py-6 gap-6'>
              {/* thumbnails */}
              <div className='flex md:flex-col flex-wrap gap-2'>
                {[
                  selectedProduct.image_url,
                  ...(selectedProduct.image_url_1
                    ? [selectedProduct.image_url_1]
                    : [])
                ].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt='thumb'
                    className={`w-16 h-16 object-contain border rounded cursor-pointer p-1 ${
                      mainImage === img ? 'border-orange-500 border-2' : ''
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>

              {/* main */}
              <div className='flex items-center gap-6 w-full'>
                <img
                  src={mainImage}
                  alt={selectedProduct.name}
                  className='w-40 h-40 object-contain'
                />

                <div>
                  <h2 className='text-xl font-semibold'>
                    {selectedProduct.name}
                  </h2>
                  <p className='text-gray-600'>{selectedProduct.weight}</p>

                  <div className='flex items-center text-orange-600 font-bold mt-2'>
                    <TbCurrencyTaka />
                    <p>{selectedProduct.price}</p>
                  </div>

                  <button
                    onClick={() => handleAddToWishlist(selectedProduct)}
                    className='mt-4 bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600'
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Featuredproducts