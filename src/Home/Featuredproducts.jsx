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
    <div className=' px-4 pt-5'>
      <h1 className='text-center font-semibold text-xl md:text-3xl md:pb-5 xl:pb-7 py-5'>
        Featured Products Form <span className='text-orange-600'>RK FOOD</span>
      </h1>

      {/* Loading Indicator */}
      {loading ? (
        <div className='text-center text-gray-500'>Loading products...</div>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
          {products.map(product => (
         <div
         key={product.id}
         className="border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-green-200 via-teal-300 to-blue-200"
       >
         <Link to={`/ProductDetails/${product.id}`}>
           <div className="cursor-pointer">
             {/* Product Image Section */}
             <div className="w-full bg-white pb-3 pt-5 rounded-t-lg flex justify-center items-center">
               <img
                 src={product.image_url}
                 alt={product.name}
                 className="w-24 h-32 rounded-lg transition-transform duration-300 hover:scale-105"
               />
             </div>
       
             {/* Product Details Section */}
             <div className="px-4 py-5 space-y-2 text-center">
               <h3 className="font-semibold text-gray-800 text-lg truncate">
                 {product.name}
               </h3>
               <p className="text-sm text-gray-600">{product.weight}</p>
               <p className="font-bold text-xl text-teal-700">$ {product.price}</p>
             </div>
           </div>
         </Link>
       
         {/* Wishlist Button */}
         <div className="py-3 px-4">
           <button
             onClick={() => handleAddToWishlist(product)}
             className="text-sm font-medium bg-orange-500 text-white text-center w-full py-3 rounded-md hover:bg-orange-600 transition-colors duration-300"
           >
             Add to Wishlist
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
