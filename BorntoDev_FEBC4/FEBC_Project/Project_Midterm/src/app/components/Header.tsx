import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Header</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/" className="text-white hover:text-gray-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/services" className="text-white hover:text-gray-300">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="text-white hover:text-gray-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/portfolio" className="text-white hover:text-gray-300">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="/blog" className="text-white hover:text-gray-300">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="/pricing" className="text-white hover:text-gray-300">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;