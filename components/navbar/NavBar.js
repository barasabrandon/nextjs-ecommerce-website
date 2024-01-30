import React from 'react';

export default function NavBar() {
  return (
    <div className="hidden md:block bg-blue-500 ">
      <div className="container mx-auto flex justify-between ">
        <div className="text-white bg-cyan-300 uppercase flex items-center px-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
              />
            </svg>
          </div>
          <div className="text-sm font-semibold tracking-normal">
            shop by category
          </div>
        </div>
        <nav className="hidden md:flex space-x-4 py-4">
          <a href="#" className="text-white hover:underline">
            Home
          </a>
          <a href="#" className="text-white hover:underline">
            About
          </a>
          <a href="#" className="text-white hover:underline">
            Services
          </a>
          <a href="#" className="text-white hover:underline">
            Contact
          </a>
        </nav>
        <div className=" text-white flex flex-row  items-center gap-2">
          <div>
            {/* Profile Account */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          {/* Wish List */}
          <div className=" flex flex-row items-center gap-2">
            <div>
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
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <div className="uppercase">
              10 Item <br /> WishList
            </div>
          </div>
        </div>

        {/* Gifts */}
        <div className="text-white bg-cyan-300 uppercase flex items-center px-3">
          <div className="text-sm font-semibold tracking-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
