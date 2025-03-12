// Header.tsx
import React from 'react';

const Header: React.FC = () => (
  <header className="bg-gray-900 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Online Marketing Services</h1>
      <nav>
        <a href="/" className="mr-4">Home</a>
        <a href="/about" className="mr-4">About</a>
        <a href="/blog" className="mr-4">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;