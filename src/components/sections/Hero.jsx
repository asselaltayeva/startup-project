import React from 'react'
import startup1 from '../../assets/startup.png'

function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-b from-black/70 via-black/40 to-transparent text-white font-body">
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src={startup1}
          alt="Startup workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10 shadow-[0_4px_30px_#0E1D1C]"></div>
      </div>

      {/* Desktop View */}
      <div className="relative z-10 hidden sm:flex m-auto max-w-[90rem] px-6 md:px-12 lg:px-24 flex-col justify-center h-full">
        <div>
          <h1
            className="tracking-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-heading-size)',
              fontWeight: 'var(--text-heading-weight)',
              letterSpacing: 'var(--text-heading-letter-spacing)',
              lineHeight: 'var(--text-heading-line-height)',
            }}
          >
            <span className="text-white">Smart Funding for</span>
            <br />
            <span className="italic text-lime-300">Bold Startups</span>
            <br />
            <span className="text-white">
              <span className="italic">Resource Hub</span>
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl font-light text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.85)]">
            Explore a curated hub of resources to raise capital, understand startup valuation, and discover accelerator programs worldwide all in one place.
          </p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative z-10 flex sm:hidden flex-col justify-center h-full px-6 text-center">
        <h1 className="text-3xl font-bold leading-tight">
          <span className="text-white">Smart Funding for</span>
          <br />
          <span className="italic text-lime-300">Bold Startups</span>
          <br />
          <span className="italic text-white">Resource Hub</span>
        </h1>
        <p className="mt-6 text-base font-light text-white">
          Explore resources to raise capital, understand valuation, and discover startup accelerators worldwide.
        </p>
      </div>
    </section>
  );
}

export default Hero;
