import React, { useState, useEffect, useContext } from 'react';
import { WishlistContext } from '../ContextApi/WishlistContext';
import { Link } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import { IoClose } from 'react-icons/io5';

const Category = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const { addToWishlist } = useContext(WishlistContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('./Fackdata.json');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();

        const categorySet = new Set(data.map(product => product.category));
        setCategories(['All', ...Array.from(categorySet)]);

        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = category => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handleAddToWishlist = product => {
    addToWishlist(product);
  };

  const openModal = product => {
    setSelectedProduct(product);
    setMainImage(product.image_url);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setMainImage(null);
  };

  return (
    <div className='px-4 pt-16'>
      <h1 className='text-center font-semibold text-xl md:text-3xl md:pb-5 xl:pb-12 py-5'>
        Browse by Category <span className='text-orange-600'>RK FOOD</span>
      </h1>

      <div className='flex justify-center mb-6'>
        <select
          className='border p-2 rounded text-gray-700'
          value={selectedCategory}
          onChange={e => handleCategoryChange(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className='text-center text-gray-500'>Loading products...</div>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className='border rounded-sm hover:shadow-xl transition-shadow duration-300 shadow-md'
            >
              <Link to={`/ProductDetails/${product.id}`}>
                <div className='cursor-pointer'>
                  <div className='w-24 h-32 mx-auto my-6 overflow-hidden'>
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className='w-full h-full object-contain transition-transform duration-300 hover:scale-105'
                    />
                  </div>
                  <div className='px-4 space-y-2 text-center'>
                    <h3 className='font-semibold text-gray-800 text-lg'>{product.name}</h3>
                    <div className='flex items-center justify-around'>
                      <p className='text-sm text-gray-600'>{product.weight}</p>
                      <div className='flex items-center justify-center'>
                        <TbCurrencyTaka size={25} />
                        <p className='font-bold text-xl'>{product.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <div className='py-1 px-4 pb-4 flex gap-2'>
                <button
                  onClick={() => handleAddToWishlist(product)}
                  className='text-sm font-medium bg-orange-500 text-white text-center w-full py-3 rounded-md hover:bg-orange-600 transition-colors duration-300'
                >
                  Add to Wishlist
                </button>
                <button
                  onClick={() => openModal(product)}
                  className='text-sm font-medium bg-green-600 text-white text-center w-full py-3 rounded-md hover:bg-green-700 transition-colors duration-300'
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
         {selectedProduct && (
           <div
             className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2 py-2 mt-3 md:mt-0'
             onClick={closeModal} // ✅ Allows closing by clicking outside modal
           >
             <div
               className='bg-white rounded-sm max-w-4xl w-full relative overflow-hidden shadow-xl mx-2 md:mx-0'
               onClick={e => e.stopPropagation()} // ✅ Prevents closing when clicking inside modal
             >
               {/* Top Section with Background Color */}
               <div className='bg-gradient-to-r from-orange-500 to-red-500 shadow-md border-b-2 text-white py-3 px-4 flex justify-between items-center'>
                 <Link to={`/ProductDetails/${selectedProduct.id}`}>
                   <h2 className='text-sm font-semibold cursor-pointer hover:underline'>
                     More Details
                   </h2>
                 </Link>
   
                 {/* Close Button */}
                 <button
                   onClick={closeModal}
                   className='text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-80 transition duration-200'
                 >
                   <IoClose size={20} />
                 </button>
               </div>
   
               {/* Main Modal Content */}
               <div className='flex flex-col md:flex-row px-4 md:px-20 py-6 md:py-12 gap-6 md:gap-20'>
                 {/* Small Images Section */}
                 <div className='flex md:flex-col flex-wrap justify-center items-center gap-2'>
                   {[
                     selectedProduct.image_url,
                     selectedProduct.image_url_1 || selectedProduct.image_url
                   ].map((img, index) => (
                     <img
                       key={index}
                       src={img}
                       alt={`Product Variation ${index + 1}`}
                       loading='lazy'
                       className={`w-16 h-16 md:w-20 md:h-20 object-contain border rounded-sm p-1 shadow-sm cursor-pointer hover:scale-110 transition-transform duration-200 
               ${mainImage === img ? 'border-2 border-orange-500' : ''}`}
                       onClick={() => setMainImage(img)}
                     />
                   ))}
                 </div>
   
                 {/* Main Image & Details Section */}
                 <div className='flex flex-col md:flex-row items-center gap-6 w-full'>
                   {/* Main Image */}
                   <div className='flex justify-center'>
                     <img
                       src={mainImage}
                       alt={selectedProduct.name}
                       loading='lazy'
                       className='w-32 h-40 md:w-52 md:h-60 object-contain transition-transform duration-300 hover:scale-105'
                     />
                   </div>
   
                   {/* Product Details */}
                   <div className='text-center md:text-left'>
                     <h2 className='text-lg md:text-xl font-semibold text-gray-900'>
                       {selectedProduct.name}
                     </h2>
                     <p className='text-gray-600 text-sm md:text-base'>
                       {selectedProduct.weight}
                     </p>
   
                     <div className='flex justify-center md:justify-start items-center mt-2 text-orange-600 font-bold text-lg'>
                       <TbCurrencyTaka size={20} />
                       <p>{selectedProduct.price}</p>
                     </div>
   
                     {/* Wishlist Button */}
                     <button
                       onClick={() => handleAddToWishlist(selectedProduct)}
                       className='mt-4 bg-orange-500 text-white px-4 md:px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300'
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
  );
};

export default Category;
