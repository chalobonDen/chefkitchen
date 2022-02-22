function Contact() {
  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-0 px-4 sm:px-6 lg:max-w-7xl lg:pt-4 lg:pb-0 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="font-chonburi text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Contact
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <img
                src="https://apicms.thestar.com.my/uploads/images/2020/09/21/868326.jpg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div className="mt-3">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <p className="font-chonburi ml-16 text-xl leading-6 text-gray-900">
                      ที่ตั้งร้านอาหาร
                    </p>
                  </dt>
                  <dd className="font-athiti mt-2 ml-16 text-xl text-gray-500">
                    1234/678 ถ.xxxxx แขวงxxxxxx เขตxxxxx กรุงเทพมหานคร 123456
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <p className="font-chonburi ml-16 text-xl leading-6 text-gray-900">
                      วันทำการ
                    </p>
                  </dt>
                  <dd className="font-athiti mt-2 ml-16 text-xl text-gray-500">
                    จันทร์ - ศุกร์ 08:00 - 17:00 น.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                    <p className="font-chonburi ml-16 text-xl leading-6 text-gray-900">
                      เบอร์โทรศัพท์
                    </p>
                  </dt>
                  <dd className="font-athiti mt-2 ml-16 text-xl text-gray-500">
                    01-234-5678
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <p className="font-chonburi ml-16 text-xl leading-6 text-gray-900">
                      อีเมล์
                    </p>
                  </dt>
                  <dd className="font-athiti mt-2 ml-16 text-xl text-gray-500">
                    info@chefkitchen.com
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        ></path>
                      </svg>
                    </div>
                    <p className="font-chonburi ml-16 text-xl leading-6 text-gray-900">
                      แฟกซ์
                    </p>
                  </dt>
                  <dd className="font-athiti mt-2 ml-16 text-xl text-gray-500">
                    01-234-5678
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
