import React from 'react'
import { Link } from 'react-router'

const Premium = () => {
  return (
    <div className='px-4 py-5'>
      <h1 className='text-center font-semibold text-xl'>
        We Are Always Premium
      </h1>

      <div className='grid grid-cols-2 gap-3 justify-between items-center text-sm py-5'>
        <Link to={'/Sourcing'}>
          <div className='relative'>
            <img
              className='rounded-sm'
              src='https://i.ibb.co.com/TghS6J9/Screenshot-2024-12-20-at-10-11-58-AM.webp'
              alt=''
            />
            <p className='text-[white] font-semibold absolute top-0'>
              Premium Sourcing
            </p>
          </div>
        </Link>

        <Link to={'/Production'}>
          <div className='relative'>
            <img
              className='rounded-sm'
              src='https://i.ibb.co.com/TghS6J9/Screenshot-2024-12-20-at-10-11-58-AM.webp'
              alt=''
            />
            <p className='text-[white] font-semibold absolute top-0'>
              Premium Production
            </p>
          </div>
        </Link>

        <Link to={'/Packaging'}>
          <div className='relative'>
            <img
              className='rounded-sm'
              src='https://i.ibb.co.com/TghS6J9/Screenshot-2024-12-20-at-10-11-58-AM.webp'
              alt=''
            />
            <p className='text-[white] font-semibold absolute top-0'>
              Premium Packaging
            </p>
          </div>
        </Link>

        <Link to={"/Service"}>
          <div className='relative'>
            <img
              className='rounded-sm'
              src='https://i.ibb.co.com/TghS6J9/Screenshot-2024-12-20-at-10-11-58-AM.webp'
              alt=''
            />
            <p className='text-[white] font-semibold absolute top-0'>
              Premium Service
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Premium
