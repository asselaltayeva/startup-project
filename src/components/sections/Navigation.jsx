import React from 'react'
import Logo from "../icons/Logo"

function Navigation() {
  return (
    <nav className="absolute top-[30px] left-[50px] right-[50px] flex justify-between items-center py-6 z-20">
      <div className="flex items-center">
        <Logo className="w-[152px] h-[43px]" />
      </div>

      {/* Navigation Links and Button */}
      <div className="flex items-center gap-6">
        <ul className="hidden md:flex space-x-6 text-white text-base">
          <li><a href="#" className="hover:text-lime-400 transition">Startups</a></li>
          <li><a href="#" className="hover:text-lime-400 transition">Funding Rounds</a></li>
          <li><a href="#" className="hover:text-lime-400 transition">Valuation</a></li>
          <li><a href="#" className="hover:text-lime-400 transition">Resource Hub</a></li>
        </ul>

        <button className="h-[26px] w-[95px] text-base font-medium bg-lime-400 text-black hover:bg-lime-300 transition border rounded-2xl">
          Apply
        </button>
      </div>
    </nav>
  );
}

export default Navigation;

