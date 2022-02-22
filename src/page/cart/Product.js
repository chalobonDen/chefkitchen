/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import './popup.css';
import Choices from './Choices';
import Summary from './Summary';

function Product() {
  const [data, setData] = useState([]);
  const [selectData, setSelectData] = useState();
  const [popup, setPopup] = useState(false);

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson.food);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const togglePopup = () => {
    setPopup(!popup);
  };

  const openPopup = (id) => {
    setPopup(true);
    setSelectData(data.find((val) => val.id === id));
  };

  if (popup) {
    document.body.classList.add('active-popup');
  } else {
    document.body.classList.remove('active-popup');
  }

  return (
    <div className="pt-6">
      <div className="max-w-2xl mx-auto pt-10 pb-0 px-4 sm:px-6 lg:max-w-7xl lg:pt-4 lg:pb-0 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"></div>

        <Summary />

        <div className="py-10 lg:pt-0 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {data.map((item, index) => (
              <div key={index}>
                <a className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-400 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={item.pic_url}
                      alt=""
                      className="w-full h-full object-center object-cover group-hover:opacity-75 duration-100"
                      onClick={() => openPopup(item.id)}
                    />
                  </div>
                  <h3 className="font-chonburi mt-4 text-md text-gray-500">
                    {item.name}{' '}
                  </h3>
                  <p className="font-chonburi mt-1 text-lg font-medium text-gray-900">
                    {item.price}
                    บาท
                  </p>
                </a>
              </div>
            ))}{' '}
          </div>
        </div>
      </div>
      {popup && (
        <div className="popup">
          <div className="overlay"></div>
          <div className="popup-content">
            <div className="content">
              <Choices selectData={selectData} />
            </div>
            <button className="close-popup" onClick={togglePopup}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
