import React from 'react'
import Debit from '@/images/qb1e_48xb_201027.jpg'
import Image from 'next/image'

function DebitBanner() {
  return (
      <div className="flex flex-col md:flex-row justify-between items-center bg-white py-10 px-24">
          <div className="max-w-lg text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-green-600 mb-4">
                  Your phone + <br /> our app + <br /> a debit card = <br /> a simpler life.
              </h1>
              <p className="text-gray-600 mb-6">
                  We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.
              </p>
              <a href="#" className="text-green-600 font-semibold hover:underline">
                  Open An Account in Minutes &rarr;
              </a>
          </div>
          <div className="relative mt-8 md:mt-0">
              <Image
                  src={Debit}
                  alt="Phone and debit card"
                  width={300}
                  height={500}
                  className="w-full max-w-xs md:max-w-sm"
              />
          </div>
      </div>
  )
}

export default DebitBanner
