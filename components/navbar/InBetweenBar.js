import Image from 'next/image';
import React from 'react';

function InBetweenBar() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4">
      <div className="hidden md:block  md:pl-20">
        {/* Image on the left (adjust width as needed) */}
        <Image
          src="/images/logo/ecommerce-logo.png"
          alt="Buy, Sell on Ecommerce"
          width={100}
          height={100}
          className="mx-auto md:mx-0"
        />
      </div>
      {/* Search Container */}
      <div className="flex-grow relative md:mt-2 md:mr-1">
        {/* Search box at the center, occupies most space */}
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <div className="absolute right-2 top-2">
          {/* Search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35"
            ></path>
            <circle cx="10.5" cy="10.5" r="7.5"></circle>
          </svg>
        </div>
      </div>
      {/* Shopping icon*/}
      <div className="hidden md:block md:pr-20  md:text-right mt-4 md:mt-0">
        <div className="flex flex-row  items-center justify-end">
          <div className="flex flex-col items-center">
            <div className="bg-cyan-300 w-6 h-6 flex items-center justify-center p-2 text-white rounded-full">
              4
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-1 uppercase font-semibold flex flex-col items-start">
            <div> Shopping </div>
            <div>Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InBetweenBar;
