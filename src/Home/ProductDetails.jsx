import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { WishlistContext } from '../ContextApi/WishlistContext' // Assuming WishlistContext is available

const ProductDetails = () => {
  const { id } = useParams() // Get the product ID from the URL
  const [product, setProduct] = useState(null) // To store product details
  const [loading, setLoading] = useState(true) // To handle loading state
  const [error, setError] = useState(null) // For error handling
  const { addToWishlist } = useContext(WishlistContext) // Access the context to add product to wishlist

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('/Fackdata.json') // Replace with actual API endpoint if necessary
        if (!response.ok) throw new Error('Failed to fetch data')
        const data = await response.json()

        // Find the product by ID
        const selectedProduct = data.find(
          product => product.id === parseInt(id)
        )
        if (!selectedProduct) throw new Error('Product not found')

        setProduct(selectedProduct) // Set product data
        setLoading(false) // Set loading state to false once data is fetched
      } catch (error) {
        setError(error.message) // Handle errors
        setLoading(false)
      }
    }

    fetchProductData()
  }, [id]) // Run effect when `id` changes

  // Loading state
  if (loading)
    return <div className='text-center text-lg text-gray-600'>Loading...</div>

  // Error handling
  if (error)
    return <div className='text-center text-lg text-red-500'>{error}</div>

  // Handle Add to Wishlist action
  const handleAddToWishlist = () => {
    addToWishlist(product) // Adds the current product to the wishlist
  }

  // Product details display
  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
        {/* Product Image */}
        <div className='flex-shrink-0 w-full md:w-1/3'>
          <img
            src={product.image_url}
            alt={product.name}
            className='w-full h-64 object-cover rounded-lg shadow-lg'
          />
        </div>

        {/* Product Information */}
        <div className='w-full md:w-2/3'>
          <h2 className='text-3xl font-semibold text-gray-800'>
            {product.name}
          </h2>
          <p className='text-lg text-gray-600 my-4'>{product.description}</p>
          <div className='flex items-center space-x-4'>
            <p className='text-2xl font-bold text-orange-600'>
              ${product.price}
            </p>
            <p className='text-sm text-gray-500'>Weight: {product.weight}</p>
          </div>

          {/* Add to Wishlist Button */}
          <div className='mt-6'>
            <button
              onClick={handleAddToWishlist} // Call handleAddToWishlist when clicked
              className='w-full md:w-auto bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition'
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
