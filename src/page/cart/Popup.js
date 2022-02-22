/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./popup.css";
import Counter from './Counter';

function Popup({selectData}) {
  return (
      <div className='wrap grid grid-rows-3 grid-flow-col gap-4'>
          
          <a className='image row-span-3'>
              <img src={selectData.pic_url} alt="" className="w-full h-full object-center object-cover " />
          </a>
          
          <div className='txt col-span-2'>
              <h1 className='font-chonburi text-3xl font-medium text-gray-900'>{selectData.name}</h1><br/>
              <h2 className='className="font-athiti'>
                  
                 <div className="flex justify-between text-base font-athiti text-gray-900">
                     <span className="block xl:inline">ราคา</span>{' '}
                     <div>
                         <span className="block text-yellow-500 xl:inline">{selectData.price}</span>{' '}
                         <span className="block xl:inline">บาท</span>
                     </div>
                 </div>

                 <div className="num flex justify-between text-base font-athiti text-gray-900">
                     <span className="block xl:inline">จำนวน</span>{' '}
                     <Counter/>
                 </div>
                 
              </h2>
          </div>

          <div className="btn row-span-2 col-span-2 text-base font-athiti text-gray-900 ">
              <a href="/cart" className="font-chonburi flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-700">
                  เพิ่มรายการ
              </a>
         </div>
          
      </div>
    
  );
}

export default Popup;
