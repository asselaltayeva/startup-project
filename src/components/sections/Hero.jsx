import React from 'react'
import ArrowRightLine from '../icons/ArrowRightLine'
import ArrowRight from '../icons/ArrowRight'
import startup from '../../assets/startup.png'

function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-b from-black/70 via-black/40 to-transparent text-white font-body">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src={startup}
          alt="Startup workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 m-auto max-w-[90rem] px-6 md:px-12 lg:px-24 flex flex-col justify-center h-full">
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
            <span className="italic" style={{ color: 'var(--color-lime-400)' }}>
              Bold Startups
            </span>
            <br />
            <span className="text-white justify-end">
              <span className="italic">Resource Hub</span> 
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl font-light text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.85)]">
          Explore a curated hub of resources to raise capital, understand startup valuation, and discover accelerator programs worldwide all in one place.
          </p>



          <div className="mt-6 flex gap-4">
        <button className="group mt-6 flex items-center gap-4 h-[37px] px-4 text-xl font-medium bg-lime-400 text-black rounded-2xl hover:bg-lime-300 transition">
        <span>Learn More</span>
        <div className="relative flex items-center">
        <ArrowRightLine
        alt="Arrow right line"
        className="stroke-black transition-all -mr-3 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 ease-in-out"
        style={{strokeWidth:5}}
        />
        <ArrowRight
        alt="Arrow right"
        className="stroke-black inline w-[24px] -ml-[4px]"
        style={{strokeWidth: 5}}
        
      />
    </div>
  </button>
</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
