import { TfiMenu } from 'react-icons/tfi'
import { GrFormSearch } from 'react-icons/gr'
import { FaEye, FaExternalLinkAlt } from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom' // Corrected import
import ComponentWithModal from './ComponentWithModal'
import Logo from '../../public/rk logo.svg'
import { MdOutlineFavoriteBorder, MdAccountCircle } from 'react-icons/md'
import { WishlistContext } from '../ContextApi/WishlistContext'
import { TbCategoryPlus } from 'react-icons/tb'

const TopBar = ({ toggleSidebar }) => {
  const [data, setData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const { wishlist } = useContext(WishlistContext)

  useEffect(() => {
    fetch('./Fackdata.json')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  useEffect(() => {
    setFilteredData(
      searchQuery.trim()
        ? data.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : []
    )
  }, [searchQuery, data])

  const handleSearchChange = e => setSearchQuery(e.target.value)

  const openModal = (item, type) => {
    setSearchQuery('')
    setModalContent({
      title:
        type === 'view' ? `View: ${item.name}` : `External Link: ${item.name}`,
      details: item
    })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalContent(null)
  }

  return (
    <div className='sticky top-0 z-20 bg-orange-600 lg:bg-white  py-1 shadow-sm'>
      <div className='h-14 flex items-center justify-between px-6 lg:px-20 '>
        {/* Logo */}
        <div className='hidden lg:block'>
          <img className='w-14 h-14' src={Logo} alt='Logo' />
        </div>

        {/* Sidebar Toggle (Mobile Only) */}
        <div className='lg:hidden'>
          <TfiMenu
            size={30}
            color='white'
            onClick={toggleSidebar}
            className='cursor-pointer'
            aria-label='Toggle sidebar'
          />
        </div>

        {/* Search Bar */}
        <div className='w-[85%] md:w-[70%] lg:w-1/2 flex items-center  relative rounded-md'>
          <input
            type='text'
            className='flex-1 bg-white border border-transparent lg:border-yellow-900 rounded-l-md outline-none pl-2 text-sm text-yellow-800 py-[9px] focus:border-yellow-700 focus:ring-1 focus:ring-yellow-700'
            placeholder='Search product'
            onChange={handleSearchChange}
            value={searchQuery}
            aria-label='Search'
          />

          <div className='bg-[#4c270a] flex items-center justify-center px-3 rounded-r-md py-2'>
            <GrFormSearch color='white' size={25} />
          </div>
          {/* Search Results Dropdown */}
          {filteredData.length > 0 && (
            <div className='absolute top-12 w-full max-h-60 bg-white rounded-md shadow-lg overflow-y-auto px-3 py-2 border border-gray-200'>
              {filteredData.map(item => (
                <div
                  key={item.id}
                  className='flex gap-4 justify-between items-center hover:bg-gray-100 bg-gray-50 py-2 px-3 rounded-md transition-all duration-200'
                >
                  <div className='flex gap-4 items-center'>
                    {/* Icons */}
                    <div className='flex flex-col items-center space-y-2'>
                      <FaEye
                        className='cursor-pointer text-gray-600 hover:text-gray-800'
                        size={15}
                        onClick={() => openModal(item, 'view')}
                        aria-label='View details'
                      />
                      <Link
                        to={`/ProductDetails/${item.id}`}
                        onClick={() => setSearchQuery('')}
                        aria-label='Go to product details'
                      >
                        <FaExternalLinkAlt
                          className='cursor-pointer text-gray-600 hover:text-gray-800'
                          size={15}
                        />
                      </Link>
                    </div>

                    {/* Product Image and Details */}
                    <Link
                      to={`/ProductDetails/${item.id}`}
                      onClick={() => setSearchQuery('')}
                      className='flex gap-3 items-center'
                    >
                      <img
                        className='w-10 h-14 object-cover rounded-md'
                        src={item.image_url}
                        alt={item.name}
                      />
                      <div>
                        <p className='text-sm font-medium text-gray-800'>
                          {item.name}
                        </p>
                        <p className='text-xs text-orange-500'>
                          {item.category}
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* Price and Weight */}
                  <div className='text-right'>
                    <p className='text-sm font-semibold text-gray-700'>
                      {item.price}
                    </p>
                    <p className='text-xs text-green-500'>{item.weight}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Wishlist and Account */}
        <div className='items-center gap-6 hidden lg:flex'>
          <Link to='/Category'>
            <div className='flex flex-col items-center px-2 py-2 bg-[#4c270a] rounded-md'>
            <TbCategoryPlus size={23} color='white' />
            </div>
          </Link>
          <Link to='/Wishlist'>
            <div className='relative p-2 rounded-md bg-[#4c270a]'>
              <MdOutlineFavoriteBorder size={23} color='white' />
              <span className='absolute -top-1 -right-3 bg-green-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center'>
                {wishlist.length}
              </span>
            </div>
          </Link>
          <Link to='/Account'>
            <div className='flex items-center gap-1 border px-3 py-2 bg-[#4c270a] rounded-md'>
              <MdAccountCircle size={23} color='white' />
              <p className='text-xs font-semibold text-white'>Account</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Modal */}
      <ComponentWithModal
        data={data}
        isModalOpen={isModalOpen}
        modalContent={modalContent}
        closeModal={closeModal}
      />
    </div>
  )
}

export default TopBar
