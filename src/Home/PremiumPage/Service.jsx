import React from 'react'
import img from '../../../public/img.png'
import img2 from '../../../public/products.svg'

const Service = () => {
  return (
    <div>
      <div className='px-3 md:px-6 lg:px-20 py-3 lg:flex gap-5'>
        <div className='pb-8 lg:flex-1'>
          <img
            className='w-full h-full object-cover lg:object-contain rounded-sm'
            src={`${img}?t=${new Date().getTime()}`}
            alt='Premium Service'
            loading='lazy'
          />
        </div>

        <div className='lg:flex-1'>
          <h1 className='text-center md:text-left text-2xl md:text-3xl font-bold text-gray-800 mb-2'>
            Premium Service
          </h1>
          <p className='text-sm text-justify text-gray-700 leading-relaxed mb-4'>
            At RKFood, our commitment goes beyond delivering high-quality food; 
            we ensure a seamless experience through prompt service, transparent policies, 
            and customer-centric support. From order placement to doorstep delivery, 
            we prioritize efficiency, reliability, and satisfaction.
          </p>

          <h2 className='text-center md:text-left text-xl font-semibold text-orange-600 mb-2'>
            Customer Support
          </h2>
          <p className='text-sm text-justify text-gray-700 leading-relaxed mb-4'>
            We believe in providing round-the-clock support to assist with inquiries, 
            resolve concerns, and enhance your experience. Our dedicated team ensures 
            every question is answered and every issue is addressed efficiently.
          </p>

          <h2 className='text-center md:text-left text-xl font-semibold text-orange-600 mb-2'>
            Fast & Reliable Delivery
          </h2>
          <p className='text-sm text-justify text-gray-700 leading-relaxed mb-4'>
            Our streamlined logistics ensure timely and accurate deliveries. 
            With real-time tracking and careful handling, we bring premium products 
            straight to your doorstep, hassle-free.
          </p>
        </div>
      </div>

      <div className='pt-3 px-3 md:px-6 lg:px-20 py-3 lg:flex gap-5'>
        <div className='lg:flex-1'>
          <h2 className='text-center text-2xl md:text-3xl font-bold mb-4'>
            What We Offer
          </h2>
          <p className='text-sm text-justify text-gray-700 leading-relaxed mb-8'>
            RKFood is dedicated to delivering premium-quality grocery items with 
            excellence at every step. Our services focus on four core principles:
            Premium Sourcing, Premium Production, Premium Packaging, and Premium Service.
          </p>

          <ul className='list-disc pl-5 text-gray-700 leading-relaxed space-y-3 mb-8'>
            <li>
              <strong>Premium Sourcing:</strong> We select the finest ingredients from 
              trusted sources to maintain the authenticity and taste you love.
            </li>
            <li>
              <strong>Premium Production:</strong> Our advanced facilities ensure every 
              product meets the highest standards of quality, hygiene, and safety.
            </li>
            <li>
              <strong>Premium Packaging:</strong> Designed for freshness and appeal, 
              our packaging guarantees long-lasting quality.
            </li>
            <li>
              <strong>Premium Service:</strong> From quick order processing to timely 
              deliveries, we provide a smooth and customer-friendly experience.
            </li>
          </ul>
        </div>

        <div className='pb-2 p-3 lg:flex-1 xl:p-16'>
          <img
            className='w-full h-full object-cover rounded-sm'
            src={`${img2}?t=${new Date().getTime()}`}
            alt='Our Offerings'
            loading='lazy'
          />
        </div>
      </div>
    </div>
  )
}

export default Service
