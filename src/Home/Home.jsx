import React from 'react'
import Featuredproducts from './Featuredproducts'
import Premium from './Premium'
import Blog from './Blog'
import img from '../../public/banner.svg'

const Home = () => {
  return (
    <div className=''>
      <div className='h-44 md:h-[300px] lg:h-[360px] xl:h-[530px] rounded-sm mx-1 md:mx-3 lg:mx-20 my-1 md:my-2 border overflow-hidden'>
        <img className='w-full h-full object-cover' src={img} alt='Image' />
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
