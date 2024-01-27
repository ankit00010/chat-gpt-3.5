// Sidebar.js
import React from 'react';
import { FaReact, FaTh, FaChartLine, FaComment, FaImages, FaMusic, FaSave, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="bg-gray-700 h-screen w-16 flex flex-col items-center p-2">
            {/* React Logo with increased space */}
            <div className="mb-20 flex flex-col items-center">
                <div className="mb-4">
                    <FaReact size={40} color="white" />
                </div>
                <span className="text-white">LOGO</span>
            </div>

            {/* Icons with spacing */}
            <div className="flex flex-col items-start space-y-10">

                <div>
                    <FaTh size={20} color="white" />
                </div>
                <div>
                    <FaChartLine size={20} color="white" />
                </div>
                <div>
                    <FaComment size={20} color="white" />
                </div>
                <div>
                    <FaImages size={20} color="white" />
                </div>
                <div>
                    <FaMusic size={20} color="white" />
                </div>
                <div>
                    <FaSave size={20} color="white" />
                </div>
                <div>
                    <FaSignOutAlt size={20} color="white" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
