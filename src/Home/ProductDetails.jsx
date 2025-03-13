import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { WishlistContext } from '../ContextApi/WishlistContext'; // Assuming WishlistContext is available
import { TbCurrencyTaka } from 'react-icons/tb';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // To store product details
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // For error handling
  const [mainImage, setMainImage] = useState(null); // Main image state
  const { addToWishlist } = useContext(WishlistContext); // Access the context to add product to wishlist

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('/Fackdata.json'); // Replace with actual API endpoint if necessary
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();

        // Find the product by ID
        const selectedProduct = data.find(product => product.id === parseInt(id));
        if (!selectedProduct) throw new Error('Product not found');

        setProduct(selectedProduct); // Set product data
        setMainImage(selectedProduct.image_url); // Set default main image
        setLoading(false);
      } catch (error) {
        setError(error.message); // Handle errors
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  // Loading state
  if (loading) return <div className='text-center text-lg text-gray-600'>Loading...</div>;

  // Error handling
  if (error) return <div className='text-center text-lg text-red-500'>{error}</div>;

  return (
    <div className='px-4 md:px-56 py-8 border'>
      <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8'>
        {/* Image Section */}
        <div className='w-full lg:w-1/2 flex flex-row items-center gap-4'>
          {/* Small Image Thumbnails */}
          <div className='flex flex-col space-y-2'>
            {[product.image_url, product.image_url_1 || product.image_url].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product Variation ${index + 1}`}
                loading='lazy'
                className={`w-14 h-14 md:w-16 md:h-16 object-contain border rounded-md cursor-pointer hover:scale-110 transition-transform duration-200 
                ${mainImage === img ? 'border-2 border-orange-500' : ''}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>

          {/* Main Image */}
          <img
            src={mainImage}
            alt={product.name}
            loading='lazy'
            className='w-60 sm:w-80 md:w-96 lg:w-64 h-auto object-contain transition-transform duration-300 hover:scale-105'
          />
        </div>

        {/* Product Details Section */}
        <div className='w-full lg:w-1/2 flex flex-col justify-center'>
          <h2 className='text-2xl sm:text-3xl font-semibold text-gray-800'>{product.name}</h2>
          <div className='flex items-center space-x-4 mt-2'>
            <div className='flex items-center text-orange-600 font-bold text-lg sm:text-xl'>
              <TbCurrencyTaka size={25} />
              <p>{product.price}</p>
            </div>
            <p className='text-sm text-gray-500'>Weight: {product.weight}</p>
          </div>

          {/* Add to Wishlist Button */}
          <div className='mt-6'>
            <button
              onClick={() => addToWishlist(product)}
              className='w-full sm:w-auto bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition'
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
