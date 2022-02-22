function Footer() {
  return (
    <nav className="bg-white border-gray-200 py-10 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-center items-center mx-auto">
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col font-chonburi mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
            <li>
              <a
                href="/contact"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0"
              >
                Contact
              </a>
            </li>
            <li>
              <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:border-0 md:p-0">
                ครัวของเชฟ | Chef Kitchen
              </a>
            </li>
            <li>
              <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:border-0 md:p-0">
                โทร 012-3456-789
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Footer;
