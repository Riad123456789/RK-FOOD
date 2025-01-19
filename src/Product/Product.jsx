import React, { useState, useEffect, useContext } from 'react'
import { WishlistContext } from '../ContextApi/WishlistContext'


const Product = () => {
  const [products, setProducts] = useState([]) // State to store all products
  const [filteredProducts, setFilteredProducts] = useState([]) // State for filtered products
  const [loading, setLoading] = useState(true) // Loading state
  const [filterOption, setFilterOption] = useState('default') // Sort and filter option
  const {addToWishlist} = useContext(WishlistContext)


  useEffect(() => {
    // Fetch all products data
    const fetchAllProducts = async () => {
      try {
        const response = await fetch('./Fackdata.json') // Replace with actual endpoint if available
        if (!response.ok) throw new Error('Failed to fetch data')
        const data = await response.json()

        setProducts(data)
        setFilteredProducts(data) // Initially show all products
        setLoading(false)
      } catch (error) {
        console.error('Error fetching all products:', error)
        setLoading(false)
      }
    }

    fetchAllProducts()
  }, [])

  // Combined function to handle sorting and filtering
  const applyFiltersAndSorting = () => {
    let updatedProducts = [...products]

    // Filter by popularity (case-insensitive)
    if (filterOption === 'popular') {
      updatedProducts = updatedProducts.filter(
        product => product.popularity.toLowerCase() === 'popular'
      )
    }

    // Apply sorting based on the filterOption
    if (filterOption === 'lowToHigh') {
      updatedProducts.sort((a, b) => a.price - b.price)
    } else if (filterOption === 'highToLow') {
      updatedProducts.sort((a, b) => b.price - a.price)
    }

    setFilteredProducts(updatedProducts)
  }

  useEffect(() => {
    applyFiltersAndSorting()
  }, [filterOption, products])

  // Function to handle "Add to Wishlist"
  const handleAddToWishlist = product => {
    addToWishlist(product);
    }

  return (
    <div>
      <div className='py-9 px-4'>
        <div className='text-center text-xl font-semibold mb-6'>
          All Products Form
          <span className='text-orange-600 px-2'>RK FOOD</span>
        </div>

        {/* Sort and Popularity Filters in One Dropdown */}
        <div className='flex flex-wrap justify-center items-center gap-4 mb-6'>
          <select
            className='border p-2 rounded'
            value={filterOption}
            onChange={e => setFilterOption(e.target.value)}
          >
            <option value='default'>Sort by Default</option>
            <option value='popular'>Popular</option>
            <option value='lowToHigh'>Price: Low to High</option>
            <option value='highToLow'>Price: High to Low</option>
          </select>
        </div>

        {/* Loading Indicator */}
        {loading ? (
          <div className='text-center text-gray-500'>Loading products...</div>
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className='border rounded-sm shadow-md hover:shadow-lg bg-[#5cdac3]'
              >
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
                  <p className='text-sm text-gray-500'>
                    Weight: {product.weight}
                  </p>
                  <p className='font-bold'> $ {product.price}</p>

                  <div className='pt-2'>
                    <button
                      onClick={() => handleAddToWishlist(product)}
                      className='text-xs font-semibold bg-orange-600 text-white text-center w-full py-3 rounded-sm'
                    >
                      Add To Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Product
