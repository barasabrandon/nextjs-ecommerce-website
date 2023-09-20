import React from 'react';

export default function SmallScreenSideBar() {
  return (
    <aside className="sidebar  w-3/4 bg-white text-black h-screen fixed top-0 left-0 z-10">
      <div className="flex justify-end mb-2 mt-3">
        <span className="uppercase font-semibold">Go Back</span>{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <ul className="pb-4 border-t-2 border-gray-200">
        <li className="p-2 border-b-2 border-gray-200">
          <a href="#">Home</a>
        </li>
        <li className="p-2 border-b-2 border-gray-200">
          <a href="#">About</a>
        </li>
        <li className="p-2 border-b-2 border-gray-200">
          <a href="#">Services</a>
        </li>
        <li className="p-2 border-b-2 border-gray-200">
          <a href="#">Contact</a>
        </li>
      </ul>
    </aside>
  );
}
