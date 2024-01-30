import InBetweenBar from '@/components/navbar/InBetweenBar';
import NavBar from '@/components/navbar/NavBar';
import SmallScreenNavbar from '@/components/navbar/SmallScreenNavbar';
import SmallScreenSideBar from '@/components/navbar/SmallScreenSideBar';
import TopBar from '@/components/navbar/TopBar';
import Image from 'next/image';
import React from 'react';

export default function Index() {
  return (
    <div className="bg-white">
      {/* Test */}
      <TopBar />
      <SmallScreenNavbar />
      {/* <SmallScreenSideBar /> */}
      <InBetweenBar />
      <NavBar />
      <div class="m-5 p-5 bg-cyan-300 flex flex-row justify-between items-center">
        <div class="w-1/3 relative ">
          {/* Image */}
          <Image
            src="/images/camera/camera_1a.png"
            alt="Camera"
            class="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>
        <div class="w-2/3 flex flex-col justify-center items-center space-y-4 px-4 ">
          <div>Camera</div>
          <div>Lenses</div>
          <div>Shop now</div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="">Clothes and Footwea</div>
<br />
<div>Electronics</div>
<br />
<div>Furniture, Garden & Home</div>
<br />
<div>Healthy & Beauty</div>
<div>Sports, Leisure & Travel</div>
<div>Baby, Kids & Toys</div>
<br /> */
}
