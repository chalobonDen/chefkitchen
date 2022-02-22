/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, {useState, useEffect} from 'react';

function Summary() {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch("data.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }).then(function (response) {
            return response.json();
        }).then(function (myJson) {
            setData(myJson.food);
        });
    };

    useEffect(() => {
        getData();
    }, []);
  return (
      <div className="mt-4 lg:mt-0 lg:row-span-3">
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <h1 className="font-chonburi text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Summary</h1>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="/" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-auto gap-6">
                        
                        <div className="col-span-6">
                          <p className="font-chonburi">รายการอาหารที่สั่ง</p>
                          <div className="overflow-y-auto h-96 mt-4 pr-4">
                            <ul role="list" className="font-athiti -my-6 divide-y divide-gray-200">
                              {data.map((item) => (
                                <li key={item.id} className="py-6 flex">
                                  <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                    <img
                                      src={item.pic_url}
                                      alt=""
                                      className="w-full h-full object-center object-cover"
                                    />
                                  </div>
                                  <div className="ml-4 flex-1 flex flex-col">
                                    <div>
                                      <div className="flex justify-between text-base text-gray-900">
                                        <h3>
                                          <a>{item.name}</a>
                                        </h3>
                                        <div>
                                          <span className="block xl:inline">{item.price}</span>{' '}
                                          <span className="block xl:inline">บาท</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex-1 flex items-end justify-between text-sm">
                                      <div>
                                        <span className="block xl:inline">จำนวน</span>{' '}
                                        <span className="block xl:inline">3</span>
                                      </div>
                                      <div className="flex">
                                        <button type="button" className="text-yellow-500 hover:text-yellow-700">
                                          ยกเลิกรายการนี้
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="col-span-6">
                          <div className="flex justify-between text-base font-athiti text-gray-900">
                            <span className="block xl:inline">รวมอาหารทั้งหมด</span>{' '}
                            <div>
                              <span className="block text-yellow-500 xl:inline">8</span>{' '}
                              <span className="block xl:inline">รายการ</span>
                            </div>
                          </div>
                          <div className="flex justify-between text-base font-chonburi text-gray-900 mt-4">
                            <span className="block xl:inline">ยอดการชำระเงิน</span>{' '}
                            <div>
                              <span className="block text-yellow-500 xl:inline">262</span>{' '}
                              <span className="block xl:inline">บาท</span>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-6 border-t border-gray-200">
                          <p className="font-chonburi mt-4">รายละเอียดการจอง</p>
                          <div className="flex justify-between text-base font-athiti text-gray-900 mt-4">
                            <span className="block xl:inline">ชื่อ</span>{' '}
                            <span className="block text-yellow-500 xl:inline">ศุภกิจ</span>
                          </div>

                          <div className="flex justify-between text-base font-athiti text-gray-900 mt-4">
                            <span className="block xl:inline">เบอร์โทรศัพท์</span>{' '}
                            <span className="block text-yellow-500 xl:inline">01-234-5678</span>
                          </div>
                          
                          <div className="flex justify-between text-base font-athiti text-gray-900 mt-4">
                            <span className="block xl:inline">โต๊ะ</span>{' '}
                            <div>
                              <span className="block text-yellow-500 xl:inline">A</span>
                              <span className="block text-yellow-500 xl:inline">8</span>
                            </div>
                          </div>

                          <div className="flex justify-between text-base font-athiti text-gray-900 mt-4">
                            <div>
                              <span className="block xl:inline">วันที่</span>{' '}
                              <span className="block text-yellow-500 xl:inline">12</span>
                            </div>
                            <div>
                              <span className="block xl:inline">เดือน</span>{' '}
                              <span className="block text-yellow-500 xl:inline">มกราคม</span>
                            </div><div>
                              <span className="block xl:inline">ปี</span>{' '}
                              <span className="block text-yellow-500 xl:inline">2565</span>
                            </div>
                          </div>

                          <div className="flex justify-between text-base font-athiti text-gray-900 mt-4">
                            <span className="block xl:inline">เวลา</span>{' '}
                            <span className="block text-yellow-500 xl:inline">12:30</span>
                          </div>

                          <div className="flex justify-between text-base font-athiti text-gray-900 mt-4">
                            <a href="/booking" className="font-chonburi flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-400 hover:bg-yellow-500">
                              ยกเลิกการจอง
                            </a>
                            <a href="/cart" className="font-chonburi flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-700">
                              ยืนยันการจอง
                            </a>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
  );
}

export default Summary;
