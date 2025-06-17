'use client';
import React, { useEffect, useState } from 'react';
import Logo from "../icons/Logo";
import { Menu, X } from 'lucide-react';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Startups', link: '#' },
    { name: 'Funding Rounds', link: '#funding' },
    { name: 'Valuation', link: '#valuation' },
    { name: 'Resource Hub', link: '#resources' },
  ];

  const navClasses = scrolled
  ? 'fixed top-4 inset-x-0 z-50 transition-all duration-300 ease-in-out sm:max-w-[900px] sm:mx-auto sm:bg-gradient-to-r sm:from-[#2F4E4D]/30 sm:to-[#1E3B3A]/20 sm:border sm:border-white/20 sm:rounded-full sm:px-4 sm:py-2 sm:shadow-lg sm:ring-1 sm:ring-white/10 sm:backdrop-blur-lg'
  : 'absolute top-[30px] left-[20px] right-[20px] z-50 transition-all duration-300 ease-in-out sm:left-[50px] sm:right-[50px] sm:bg-[#2F4E4D]/0 sm:border sm:border-white/10 sm:rounded-full sm:px-4 sm:py-2 sm:shadow-md sm:ring-1 sm:ring-white/5 sm:backdrop-blur-sm';


  return (
    <nav className={navClasses}>
      <div className="flex items-center justify-between">
        <a href="#" aria-label="Go to top">
          <Logo className="w-[80px] sm:w-[90px] h-[36px] sm:h-[40px] cursor-pointer" />
        </a>

        <ul className="hidden md:flex flex-1 justify-center space-x-6 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.link} className="text-white hover:text-lime-500 transition-colors duration-300">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <a href="#apply" className="hidden md:block">
          <button className="h-[32px] w-[100px] text-base font-medium bg-lime-300 text-[#0E1D1C] hover:bg-lime-200 transition-colors duration-300 border border-lime-200 rounded-2xl shadow-sm hover:shadow-md">
            Apply
          </button>
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-[#2F4E4D]/90 rounded-2xl p-4 border border-white/20">
          <ul className="space-y-4 text-white font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block hover:text-lime-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 w-full h-[36px] text-base font-medium bg-lime-300 text-[#0E1D1C] hover:bg-lime-200 transition-colors duration-300  border-lime-200 "
          >
            Apply
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
