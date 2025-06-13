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
    { name: 'Funding Rounds', link: '#' },
    { name: 'Valuation', link: '#' },
    { name: 'Resource Hub', link: '#' },
  ];

  const navClasses = scrolled
  ? 'fixed top-4 inset-x-0 max-w-[1300px] mx-auto bg-gradient-to-r from-[#2F4E4D]/30 to-[#1E3B3A]/20 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 shadow-lg ring-1 ring-white/10 transition-all duration-300 ease-in-out z-50'
  : 'absolute top-[30px] left-[50px] right-[50px] bg-[#2F4E4D]/0 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 shadow-md ring-1 ring-white/5 transition-all duration-300 ease-in-out z-50';



  return (
    <nav className={navClasses}>
      <div className="flex items-center justify-between">
        <Logo className="w-[152px] h-[43px]" />

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-1 justify-center space-x-6 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.link} className="text-white hover:text-lime-500 transition-colors duration-300">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <button className="h-[32px] w-[100px] text-base font-medium bg-lime-300 text-[#0E1D1C] hover:bg-lime-200 transition-colors duration-300 border border-lime-200 rounded-2xl shadow-sm hover:shadow-md">
            Apply
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-[#2F4E4D]/90 rounded-2xl p-4 backdrop-blur-md border border-white/20">
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
            className="mt-6 w-full h-[36px] text-base font-medium bg-lime-300 text-[#0E1D1C] hover:bg-lime-200 transition-colors duration-300 border border-lime-200 rounded-2xl shadow-sm hover:shadow-md"
          >
            Apply
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
