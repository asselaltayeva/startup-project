import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#2F4E4D] text-white font-body py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <h2
            className="tracking-tight font-semibold whitespace-nowrap text-center md:text-left"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 90px)',
              fontWeight: 'var(--text-heading-weight)',
              letterSpacing: 'var(--text-heading-letter-spacing)',
              lineHeight: 'var(--text-heading-line-height)',
              margin: 0,
            }}
          >
            Smart Funding for{' '}
            <br className="hidden md:block" />
            <span className="italic text-lime-400 primary-glow">Bold Startups</span>
          </h2>
        </div>

        {/* Navigation Links in a column, right-aligned */}
        <ul className="flex flex-col gap-4 text-sm md:text-base w-full md:w-auto text-right">
          <li><a href="#" className="hover:text-lime-400 transition block">Startups</a></li>
          <li><a href="#funding" className="hover:text-lime-400 transition block">Funding Rounds</a></li>
          <li><a href="#valuation" className="hover:text-lime-400 transition block">Valuation</a></li>
          <li><a href="#resources" className="hover:text-lime-400 transition block">Resource Hub</a></li>
          <li><a href="#" className="hover:text-lime-400 transition block">All rights Reserved</a></li>
        </ul>

       
      </div>
    </footer>
  )
}

export default Footer
