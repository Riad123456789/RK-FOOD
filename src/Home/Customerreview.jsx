import React from 'react'
import { MdStar } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5,
    review:
      'Amazing quality! The spices are fresh and authentic. Will buy again.'
  },
  {
    id: 2,
    name: 'Sarah Smith',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 4,
    review: 'Great flavors! Shipping was a bit slow but overall satisfied.'
  },
  {
    id: 3,
    name: 'Michael Lee',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    rating: 5,
    review: 'Best spices I have ever purchased. Highly recommended!'
  },
  {
    id: 4,
    name: 'Emma Brown',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    rating: 5,
    review:
      'Absolutely love the quality! The aroma of these spices is just perfect.'
  },
  {
    id: 5,
    name: 'Emma Brown',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    rating: 5,
    review:
      'Absolutely love the quality! The aroma of these spices is just perfect.'
  },
  {
    id: 6,
    name: 'Michael Lee',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    rating: 5,
    review: 'Best spices I have ever purchased. Highly recommended!'
  }
]

const CustomerReview = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 py-12 '>
      <h2 className='text-3xl font-bold text-center text-gray-900 mb-6'>
        Hear It From The People
      </h2>

      <div className='flex justify-center items-center gap-3 mb-8'>
        <div className='flex'>
          {[...Array(5)].map((_, index) => (
            <MdStar key={index} color='#F97316' className='text-2xl' />
          ))}
        </div>
        <p className='text-lg font-medium text-gray-800'>
          7,000+ five-star reviews
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className='pb-10'
      >
        {reviews.map(review => (
          <SwiperSlide key={review.id}>
            <div className='p-6 bg-white border rounded-lg shadow-xl transition-transform duration-300 hover:scale-105'>
              <div className='flex items-center gap-4 mb-4'>
                <img
                  src={review.image}
                  alt={review.name}
                  className='w-14 h-14 rounded-full border-2 border-orange-500'
                />
                <h3 className='text-lg font-semibold text-gray-900'>
                  {review.name}
                </h3>
              </div>
              <div className='flex items-center text-orange-500 my-2 text-xl'>
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </div>
              <p className='text-gray-700 italic'>{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CustomerReview
