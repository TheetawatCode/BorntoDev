"use client"; // บอกให้ Next.js รันโค้ดนี้บนไคลเอนต์เท่านั้น

import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // ทำให้แน่ใจว่าโค้ดนี้รันบน client
    }, []);

    return (
        <div className="shadow-lg bg-black">
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex justify-between">
                    <a
                        href="/"
                        aria-label="AuroraTours"
                        title="AuroraTours"
                        className="inline-flex items-center"
                    >
                        <span className="text-2xl font-bold tracking-wide text-gray-100 uppercase transition-colors duration-500 hover:text-gray-400">
                            AuroraTours
                        </span>
                    </a>
                    <ul className="items-center hidden font-semibold space-x-12 lg:flex">
                        <li>
                            <a
                                href="/"
                                aria-label="Home"
                                title="Home"
                                className="tracking-wide text-gray-100 transition-colors duration-500 hover:text-gray-400"
                            >
                                ./&nbsp; Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/services"
                                aria-label="Services"
                                title="Services"
                                className="tracking-wide text-gray-100 transition-colors duration-500 hover:text-gray-400"
                            >
                                ./&nbsp; Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                aria-label="About"
                                title="About"
                                className="tracking-wide text-gray-100 transition-colors duration-500 hover:text-gray-400"
                            >
                                ./&nbsp; About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                aria-label="Contact"
                                title="Contact"
                                className="tracking-wide text-gray-100 transition-colors duration-500 hover:text-gray-400"
                            >
                                ./&nbsp; Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="/gallery"
                                aria-label="Gallery"
                                title="Gallery"
                                className="racking-wide text-gray-100 transition-colors duration-500 hover:text-gray-400"
                            >
                                ./&nbsp; Gallery
                            </a>
                        </li>

                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 text-white transition duration-200 rounded hover:bg-gray-200 hover:text-blue-950 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="fixed inset-0 z-50">
                                <div className="absolute top-0 left-0 w-full bg-black shadow-lg">
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <a
                                                    href="/"
                                                    aria-label="AuroraTours"
                                                    title="AuroraTours"
                                                    className="inline-flex items-center"
                                                >
                                                    <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                                                        AuroraTours
                                                    </span>
                                                </a>
                                            </div>
                                            <div>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg className="w-5 text-white hover:text-black" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <ul className="mt-10 mb-8 space-y-12 text-center font-semibold">
                                                <li>
                                                    <a
                                                        href="/services"
                                                        aria-label="Services"
                                                        title="Services"
                                                        className="tracking-wide text-white transition-colors duration-200 hover:text-gray-400"
                                                    >
                                                        ./&nbsp; Services
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/about"
                                                        aria-label="About"
                                                        title="About"
                                                        className="tracking-wide text-white transition-colors duration-200 hover:text-gray-400"
                                                    >
                                                        ./&nbsp; About
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/contact"
                                                        aria-label="Contact"
                                                        title="Contact"
                                                        className="tracking-wide text-white transition-colors duration-200 hover:text-gray-400"
                                                    >
                                                        ./&nbsp; Contact
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/gallery"
                                                        aria-label="Gallery"
                                                        title="Gallery"
                                                        className="tracking-wide text-white transition-colors duration-200 hover:text-gray-400"
                                                    >
                                                        ./&nbsp; Gallery
                                                    </a>
                                                </li>
                                                
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
