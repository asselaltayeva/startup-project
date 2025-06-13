import React from 'react'
import ArrowRightLine from '../icons/ArrowRightLine'
import ArrowRight from '../icons/ArrowRight'
import startup1 from '../../assets/startup.png'
import TextPressure from './TextPressure';


function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-b from-black/70 via-black/40 to-transparent text-white font-body">
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src={startup1}
          alt="Startup workspace"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10 shadow-[0_4px_30px_#0E1D1C]"></div>
        </div>

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
            <span className="italic text-lime-300">
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



          <div className="mt-6 flex gap-2">
            <button className="group flex items-center gap-3 h-10 px-4 text-base font-medium bg-lime-300 text-[#0E1D1C] rounded-2xl hover:bg-lime-200 transition-colors duration-300 ease-in-out shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-lime-300/50">
            <span>Learn More</span>
            <div className="relative flex items-center overflow-hidden">
              <ArrowRightLine
              alt="Arrow right line"
              className="stroke-[#0E1D1C] absolute left-0 w-4 opacity-0 translate-x-[-8px] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
              style={{ strokeWidth: 4 }}
              />
              <ArrowRight
              alt="Arrow right"
              className="stroke-[#0E1D1C] relative w-[20px] ml-1 transition-all duration-300 ease-in-out"
              style={{ strokeWidth: 4 }}
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
