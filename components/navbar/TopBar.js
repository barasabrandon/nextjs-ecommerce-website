import React from 'react';

export default function TopBar() {
  return (
    <div class="bg-cyan-300 p-2 md:p-4 flex flex-col md:flex-row md:justify-between">
      <div class="md:ml-4 md:mb-0 mb-2 text-center md:text-left">
        <span class="text-white">Buy, Sell on Ecommerce</span>
      </div>
      <div class="md:mr-4 text-center md:text-right">
        <span class="text-white">Support & Help, Call 0743145612</span>
      </div>
    </div>
  );
}
