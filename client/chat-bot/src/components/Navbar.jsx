// Navbar.js
import React from 'react';
import { FaSearch, FaBell, FaChevronDown, FaUser } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="bg-gray-800 p-4 relative  flex-1">
            <div className="container mx-auto flex justify-between items-center">
                {/* Centered Searchbar */}
                <div className="flex items-center flex-grow">
                    <div className="mx-auto">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                placeholder="Search anything..."
                                className="bg-gray-700 text-white px-4 py-2 rounded-full w-64"
                            />
                            <span className="absolute right-0 pr-3 text-white">
                                <FaSearch size={16} />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right-aligned Bell Icon, User Icon, and Dropdown */}
                <div className="flex items-center space-x-4">
                    <span className="text-white">
                        <FaBell size={20} />
                    </span>

                    <div className="flex items-center space-x-2">
                        <div className="rounded-full bg-white p-1">
                            <FaUser size={20} />
                        </div>
                        <span className="text-white">
                            <FaChevronDown size={16} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
