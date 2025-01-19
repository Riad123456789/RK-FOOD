import React, { useState, useEffect, useContext } from 'react'
import { WishlistContext } from '../ContextApi/WishlistContext'
import { Link } from 'react-router'
const Featuredproducts = () => {
  const [products, setProducts] = useState([]) // State to store products
  const [loading, setLoading] = useState(true) // State to track loading
  const { addToWishlist } = useContext(WishlistContext)

  useEffect(() => {
    // Fetch featured products data
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch('./Fackdata.json') // Replace with actual endpoint if available
        if (!response.ok) throw new Error('Failed to fetch data')
        const data = await response.json()
        setProducts(data) // Update products state
        setLoading(false)
      } catch (error) {
        console.error('Error fetching featured products:', error)
        setLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, []) // Runs only once on component mount

  // Function to handle "Add to Wishlist"
  const handleAddToWishlist = product => {
    addToWishlist(product)
  }

  return (
    <div className=' px-4'>
      <div className='text-center text-xl font-semibold mb-6'>
        Featured Products Form
        <span className='text-orange-600 px-2'>RK FOOD</span>
      </div>

      {/* Loading Indicator */}
      {loading ? (
        <div className='text-center text-gray-500'>Loading products...</div>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
          {products.map(product => (
            <div
              key={product.id}
              className='border rounded-sm shadow-md hover:shadow-lg bg-[#5cdac3]'
            >
              <Link to={`/ProductDetails/${product.id}`}>
                <div className='cursor-wait'>
                  <div className='w-full bg-white pb-2 pt-7'>
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className='w-20 h-28 rounded-md mb-3 mx-auto'
                    />
                  </div>
                  <div className='px-3 py-4 space-y-1'>
                    <h3 className='font-medium text-gray-700 text-sm'>
                      {product.name}
                    </h3>
                    <p className='text-sm text-gray-500'>{product.weight}</p>
                    <p className='font-bold'>$ {product.price}</p>
                  </div>
                </div>
              </Link>

              <div className='py-3 px-3'>
                <button
                  onClick={() => handleAddToWishlist(product)}
                  className='text-xs font-semibold bg-orange-600 text-white text-center w-full py-3 rounded-sm'
                >
                  Add To Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Featuredproducts
