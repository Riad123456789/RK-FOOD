import React from 'react'
import banner from '../../public/Group 28.svg'
import Featuredproducts from './Featuredproducts'
import Premium from './Premium'
import Blog from './Blog'
const Home = () => {
  return (
    <div className=''>
      <div className=' h-44 rounded-sm bg-[#fba67f]  '>
        {/* <img className='pt-4' src={banner} alt='' /> */}
      </div>
      <div>
        <Premium></Premium>
      </div>
      <div>
        <Featuredproducts></Featuredproducts>
      </div>
      <div>
        <Blog></Blog>
      </div>
    </div>
  )
}

export default Home
