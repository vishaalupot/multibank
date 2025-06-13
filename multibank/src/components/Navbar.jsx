// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full bg-[#0C101D] text-white text-sm shadow-xl">
      {/* Top Strip */}
      <div className="flex justify-between items-center px-4 md:px-16 py-2 border-b border-[#1C2230]">
        <div className="flex space-x-4">
          <span className="text-gray-400">AE: 800203040</span>
          <a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-white transition">Log in</a>
          <button className="border border-white rounded px-3 py-1 hover:bg-white hover:text-black transition">Become an IB</button>
          <button className="bg-gradient-to-r from-blue-500 to-teal-400 px-4 py-1 rounded text-white font-semibold hover:opacity-90 transition">Start Trading</button>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center px-4 md:px-16 py-4">
        {/* Logo and Branding */}
        <div className="flex items-center space-x-2 text-white font-bold text-lg">
          <span className="text-[#1DA1F2]">MEX</span>
          <span>Global</span>
          <span className="text-xs text-gray-400 ml-2 font-light">PART OF</span>
          <span className="text-[#4183f1]">MultiBank</span>
          <span>Group</span>
          <span className="text-[10px] text-gray-400 ml-1">EST. 2005</span>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6 text-white text-sm font-medium">
          {["About", "Products", "Platforms", "Accounts", "Promotions", "Tools", "Partnership", "Support", "EN"].map((item, i) => (
            <div key={i} className="relative group">
              <button className="hover:text-gray-300">{item} ▼</button>
              {/* Dropdown placeholder */}
              <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black p-4 shadow-lg mt-1 z-10 rounded w-48">
                <p className="text-sm">Dropdown content here</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
