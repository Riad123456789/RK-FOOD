import { TfiMenu } from 'react-icons/tfi'
import { GrFormSearch } from 'react-icons/gr'
import { FaEye, FaExternalLinkAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import ComponentWithModal from './ComponentWithModal'

const TopBar = ({ toggleSidebar }) => {
  const [data, setData] = useState([]) // Store the fetched data
  const [searchQuery, setSearchQuery] = useState('') // Track the search input
  const [filteredData, setFilteredData] = useState([]) // Store filtered results
  const [isModalOpen, setIsModalOpen] = useState(false) // Modal visibility
  const [modalContent, setModalContent] = useState(null) // Modal content

  useEffect(() => {
    // Fetch the data when the component mounts
    fetch('./Fackdata.json')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  

  useEffect(() => {
    // Filter the data whenever the search query changes
    if (searchQuery.trim() === '') {
      setFilteredData([]) // Clear results if searchQuery is empty
    } else {
      const filtered = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredData(filtered)
    }
  }, [searchQuery, data])

  const handleSearchChange = e => {
    setSearchQuery(e.target.value) // Update the search query
  }

  const openModal = (item, type) => {
    // Clear the search input
    setSearchQuery('')

    const content =
      type === 'view'
        ? { title: `View: ${item.name}`, details: item }
        : { title: `External Link for: ${item.name}`, details: item }
    setModalContent(content)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalContent(null)
  }

  return (
    <div className='bg-orange-600 h-14 flex items-center px-3 justify-between sticky top-0 z-20'>
      <div className='w-[15%] flex items-center'>
        <TfiMenu
          size={30}
          color='white'
          onClick={toggleSidebar}
          className='cursor-pointer'
        />
      </div>

      <div className='w-[85%] h-10 flex items-center relative'>
        <div className='w-[87%] bg-white h-full rounded-l-md flex items-center'>
          <input
            type='text'
            className='w-full h-full bg-transparent border-none outline-none pl-2 text-sm text-yellow-800'
            placeholder='Search product'
            onChange={handleSearchChange}
            value={searchQuery}
          />
        </div>
        <div className='bg-black w-[13%] h-full rounded-r-md flex items-center justify-center'>
          <GrFormSearch color='white' size={30} />
        </div>

        {/* Search Results Dropdown with Scrolling */}
        {filteredData.length > 0 && (
          <div
            className='w-full max-h-60 bg-white absolute rounded-sm top-12 shadow-lg overflow-y-auto px-1 py-1 space-y-1 border'
            style={{
              scrollbarWidth: 'thin', // For modern browsers
              scrollbarColor: '#ccc #f9f9f9' // Custom scrollbar color
            }}
          >
            {filteredData.map(item => (
              <div
                key={item.id}
                className='flex gap-3 justify-between hover:bg-[#c7c7c7] bg-[#f0f0f0] py-2 px-3'
              >
                <div className='flex gap-6 items-center'>
                  <div className='space-y-3'>
                    <FaEye
                      className='cursor-pointer'
                      size={15}
                      onClick={() => openModal(item, 'view')}
                    />
                    <FaExternalLinkAlt className='cursor-pointer' size={15} />
                  </div>
                  <img className='w-8 h-12' src={item.image_url} alt='image' />

                  <div
                    className='cursor-pointer text-sm font-normal'
                    onClick={() => alert(`Selected: ${item.name}`)} // Example action
                  >
                    {item.name}
                    <p className='text-[#ff8229]'>{item.category}</p>
                  </div>
                </div>

                <div className='space-y-1'>
                  <p className='text-sm'>{item.price}</p>
                  <p className='text-sm text-[#2cd282]'>{item.weight}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Modal */}
      <ComponentWithModal
        data={data}
        isModalOpen={isModalOpen}
        modalContent={modalContent}
        closeModal={closeModal}
      ></ComponentWithModal>
    </div>
  )
}

export default TopBar
