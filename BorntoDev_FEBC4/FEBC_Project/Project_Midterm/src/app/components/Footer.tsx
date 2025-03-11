import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-4">AuroraTours</h3>
            <p className="text-gray-400">Providing the best travel experiences.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:text-white transition duration-300">Home</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="hover:text-white transition duration-300">Services</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-white transition duration-300">About</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-white transition duration-300">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/gallery" className="hover:text-white transition duration-300">Gallery</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <p className="text-gray-400">Email: info@mywebsite.com</p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
            <p className="text-gray-400">Address: 123 Main Street, Anytown, USA</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} AuroraTours. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;