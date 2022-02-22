import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];
function Home() {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="font-chonburi text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">ยินดีต้อนรับสู่</span>{' '}
                <span className="block text-yellow-400 mt-3">ครัวของเชฟ</span>
              </h1>
              <p className="font-athiti mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                ครัวของเชฟ.. เติบโตมาจากธุรกิจครอบครัว เป็นร้านอาหารไทยเล็กๆ
                ย่านสยามสแควร์ เริ่มทำอาหารจากเมนูเป็ดย่าง
                ซึ่งเป็นเมนูเด็ดของร้านที่สามารถมัดใจลูกค้าได้
                จนสามารถสร้างชื่อเสียงได้อย่างยาวนานถึง 9 ปี
              </p>
              <div className="font-chonburi mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/booking"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10"
                  >
                    เริ่มจองโต๊ะ
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="menu"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-50 hover:bg-yellow-100 md:py-4 md:text-lg md:px-10"
                  >
                    ดูเมนูอาหาร
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://img.wongnai.com/p/1920x0/2021/05/18/40c24da2cb66423daa06772305c1b11e.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
export default Home;
