import React from 'react'
import img from '../../../public/production.PNG'
import img2 from '../../../public/products.svg'

const Production = () => {
  return (
    <div>
      <div className='px-3 md:px-6 lg:px-20 py-3 lg:flex gap-5'>
        <div className='pb-8 lg:flex-1'>
          <img
            className='w-full h-full object-cover lg:object-contain rounded-sm'
            src={`${img}?t=${new Date().getTime()}`} // Forces reload
            alt='Premium Production'
            loading='lazy' // Enables lazy loading
          />
        </div>

        <div className='lg:flex-1'>
          <h1 className='text-center md:text-left text-2xl md:text-3xl font-bold text-gray-800 mb-2'>
            Premium Production
          </h1>
          <p className='text-sm text-justify text-gray-700 leading-relaxed mb-4'>
            Production is a part of a process that is solely driven with the
            mission in mind to provide an absolute quality product to the
            consumer. RKFood is always committed to delivering quality products,
            hence the whole product process runs on strict regulations. We think
            of food as the main source of building a healthy generation. On the
            path to our vision, production plays an important role, where we
            never run out of energy to make it right and improve the entire
            system.
          </p>

          <h2 className='text-center md:text-left text-xl font-semibold text-orange-600 mb-2'>
            Maintaining Hygiene
          </h2>
          <p className='text-sm text-justify text-gray-700 leading-relaxed mb-4'>
            Hygiene is something you as a consumer never compromise on, and
            neither do we as contributors to society. We maintain proper hygiene
            to ensure 100% safe products for consumption. Each step of the
            process is meticulously monitored to uphold the highest standards of
            cleanliness.
          </p>

          <h2 className='text-center md:text-left text-xl font-semibold text-orange-600 mb-2'>
            Safety
          </h2>
          <p className='text-sm text-justify text-gray-700 leading-relaxed mb-4'>
            When it comes to safety, RKFood ensures the safety of grocery items
            by providing authentic food, labeling actual expiry dates, and
            employing an automated production system that minimizes human touch.
            With these practices, you can feel healthy and safe consuming our
            products.
          </p>
        </div>
      </div>

      <div className='pt-3 px-3 md:px-6 lg:px-20 py-3 lg:flex gap-5'>
        <div className='lg:flex-1'>
          <h2 className='text-center text-2xl md:text-3xl font-bold mb-4'>
            What We Offer
          </h2>
          <p className='text-sm text-justify text-gray-700 leading-relaxed mb-8'>
            RKFood is a visionary initiative dedicated to fulfilling your
            craving for authentic, high-quality food. Our mission is to make
            premium grocery items accessible to everyone, bridging the gap
            between your dining table and the purest, freshest foodstuffs. We
            focus on four core principles: Premium Sourcing, Premium Production,
            Premium Packaging, and Premium Service.
          </p>

          <ul className='list-disc pl-5 text-gray-700 leading-relaxed space-y-3 mb-8'>
            <li>
              <strong>Premium Sourcing:</strong> Raw materials are sourced from
              renowned, authentic regions to deliver the original taste and
              nostalgia cherished by our customers.
            </li>
            <li>
              <strong>Premium Production:</strong> Advanced automated facilities
              ensure every product is crafted with utmost care, prioritizing
              hygiene and safety.
            </li>
            <li>
              <strong>Premium Packaging:</strong> Our aesthetically designed and
              food-safe packaging preserves freshness and adds elegance.
            </li>
            <li>
              <strong>Premium Service:</strong> Guaranteed delivery timelines
              and exceptional customer care create a delightful experience for
              our valued customers.
            </li>
          </ul>
        </div>

        <div className='pb-2 p-3 lg:flex-1 xl:p-16'>
          <img
            className='w-full h-full object-cover rounded-sm'
            src={`${img2}?t=${new Date().getTime()}`} // Forces reload
            alt='Premium Packaging'
            loading='lazy' // Enables lazy loading
          />
        </div>
      </div>
    </div>
  )
}

export default Production
