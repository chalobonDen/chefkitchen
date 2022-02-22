/* eslint-disable no-unused-vars */
import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';

const Booking = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [zone, setZone] = useState('');
  const [table, setTable] = useState('');
  const [food, setFood] = useState('');

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:4000/customers/create-customer`,
        {
          name: name,
          phone: phone,
          date: date,
          time: time,
          zone: zone,
          table: table,
          food: food,
        }
      );
      data.push(await response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setData(data);
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-0 px-4 sm:px-6 lg:max-w-7xl lg:pt-4 lg:pb-0 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="font-chonburi text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Booking
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <div className="mt-5 md:mt-0 md:col-span-2">
                {/* action="#" method="POST" */}
                <form onSubmit={postData}>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6">
                          <label
                            htmlFor="name"
                            className="font-chonburi block text-md text-gray-700"
                          >
                            ชื่อในการจองโต๊ะ
                          </label>
                          <input
                            type="text"
                            id="base-input"
                            className="font-athiti bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="phonenumber"
                            className="font-chonburi block text-md text-gray-700"
                          >
                            เบอร์โทรศัพท์
                          </label>
                          <input
                            type="text"
                            id="base-input"
                            className="font-athiti bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="date"
                            className="font-chonburi block text-md text-gray-700"
                          >
                            วัน/เดือน/ปี
                          </label>

                          <div className="relative">
                            <input
                              type="date"
                              className="font-athiti bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-yellow-500
                                                          focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                                          dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="time"
                            className="font-chonburi block text-md text-gray-700"
                          >
                            เวลา
                          </label>

                          <div className="flex justify-between">
                            <input
                              type="time"
                              min="08:00"
                              max="16:00"
                              //  required
                              className="font-athiti bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-yellow-500
                                                          focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                                          dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="zone"
                            className="font-chonburi block text-md text-gray-700"
                          >
                            โซน
                          </label>
                          <select
                            id="zone"
                            name="zone"
                            autoComplete="zone-name"
                            className="font-athiti bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                            value={zone}
                            onChange={(e) => setZone(e.target.value)}
                            required
                          >
                            <option>กรุณาเลือกโซน</option>
                            <option required>A</option>
                            <option required>B</option>
                            <option required>C</option>
                            <option required>D</option>
                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="font-chonburi block text-md text-gray-700"
                          >
                            โต๊ะ
                          </label>
                          <select
                            id="num_table"
                            name="num_table"
                            autoComplete="num_table"
                            className="font-athiti bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                            value={table}
                            onChange={(e) => setTable(e.target.value)}
                            required
                          >
                            <option>กรุณาเลือกโต๊ะ</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                          </select>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="name"
                            className="font-chonburi block text-md text-gray-700"
                          >
                            อาหาร
                          </label>
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-2">
                              <div className="flex items-center mb-4">
                                <input
                                  id="country-option-1"
                                  type="radio"
                                  name="countries"
                                  value="USA"
                                  className="w-4 h-4 focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-300"
                                  aria-labelledby="country-option-1"
                                  aria-describedby="country-option-1"
                                  checked
                                />
                                <label
                                  for="country-option-1"
                                  className="font-athiti block ml-2 text-md text-gray-900 dark:text-gray-300"
                                >
                                  จอง
                                </label>
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-2">
                              <div className="flex items-center mb-4">
                                <input
                                  id="country-option-2"
                                  type="radio"
                                  name="countries"
                                  value="USA"
                                  className="w-4 h-4 focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-300"
                                  aria-labelledby="country-option-1"
                                  aria-describedby="country-option-1"
                                  checked
                                />
                                <label
                                  for="country-option-2"
                                  className="font-athiti block ml-2 text-md text-gray-900 dark:text-gray-300"
                                >
                                  ไม่จอง
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="name"
                            className="font-athiti block text-md text-gray-700"
                          >
                            *หากมาช้ากว่าเวลาที่จองเกิน 15 นาที
                            ขออนุญาตยกเลิกการจองนะคะ/ครับ
                          </label>
                        </div>

                        <button className="col-span-6" type="submit">
                          <p
                            // href="/cart"
                            className="font-chonburi flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-700"
                          >
                            ยืนยันการจองโต๊ะ
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div className="mt-3">
              <img
                src="https://i0.wp.com/goterrestrial.com/wp-content/uploads/2018/11/c3e23943a4ec9f7b6d8c27c013314a57-e1542135946764.jpg?resize=564%2C561&ssl=1"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
