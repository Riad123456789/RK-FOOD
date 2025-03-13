import React from 'react'
import Featuredproducts from './Featuredproducts'
import Premium from './Premium'
import Blog from './Blog'
import img from '../../public/banner.PNG'
import img1 from '../../public/b.PNG'
import img2 from '../../public/b2.PNG'
import Customerreview from './Customerreview'
import Slider from './Slider'

const Home = () => {
  return (
    <div className=''>
      <div className='h-44 md:h-[300px] lg:h-[360px] xl:h-[530px] rounded-sm mx-1 md:mx-3 lg:mx-20 my-1 md:my-2 border overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src={`${img}?t=${new Date().getTime()}`} // Forces reload
          alt='Image'
          loading='lazy' // Enables lazy loading
        />
      </div>

      <div>
        <Premium></Premium>
      </div>

      <div className='  pt-4 sm:mx-8 sm:my-6 sm:pt-5 md:mx-2 md:my-3 md:pt-6 lg:mx-20 lg:my-9 lg:pt-6 rounded-sm'>
        {/* img1 (Visible only on lg and above) */}
        <img
          src={img1}
          alt='Main Image'
          className='w-full h-auto object-cover hidden lg:block'
        />

        {/* img2 (Visible only on sm and md) */}
        <img
          src={img2}
          alt='Alternative Image'
          className='w-full h-auto object-cover block sm:block md:block lg:hidden'
        />
      </div>

      <div>
        <Featuredproducts></Featuredproducts>
      </div>
      <div>
        <Blog></Blog>
      </div>
      <div>
        <Customerreview></Customerreview>
      </div>

      <div className='  pt-4 sm:mx-8 sm:my-6 sm:pt-5 md:mx-2 md:my-3 md:pt-6 lg:mx-20 lg:my-9 lg:pt-6 rounded-sm'>
        {/* img1 (Visible only on lg and above) */}
        <img
          src={img1}
          alt='Main Image'
          className='w-full h-auto object-cover hidden lg:block'
        />

        {/* img2 (Visible only on sm and md) */}
        <img
          src={img2}
          alt='Alternative Image'
          className='w-full h-auto object-cover block sm:block md:block lg:hidden'
        />
      </div>
<div className='my-10 md:my-28 '>
  
<Slider></Slider>
</div>
    </div>
  )
}

export default Home
