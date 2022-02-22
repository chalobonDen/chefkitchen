import React, { useState, useEffect } from 'react';

function Menu() {
  const [data, setData] = useState([]);
  const getData=()=>{
    fetch('data.json'
      ,{
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      setData(myJson.food)
    });

  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-chonburi font-extrabold tracking-tight text-gray-900">Menu</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((item) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a key={item.id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-400 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={item.pic_url} alt=""
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="font-chonburi mt-4 text-md text-gray-500">{item.name}</h3>
              <p className="font-chonburi mt-1 text-lg font-medium text-gray-900">{item.price} บาท</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Menu;