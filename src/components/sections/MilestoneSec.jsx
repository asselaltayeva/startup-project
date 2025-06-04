import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

function MilestoneSec() {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(stepsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#f4e8d1] py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto relative">
    
        <div
          ref={(el) => (stepsRef.current[0] = el)}
          className="flex flex-col items-center text-center"
        >
          <div className="bg-lime-400 text-black rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold">
            1
          </div>
          <p className="mt-2 font-medium text-black">Funding Rounds</p>
        </div>

        <div className="border-t border-dashed border-gray-400 w-1/5 hidden md:block" />

        <div
          ref={(el) => (stepsRef.current[1] = el)}
          className="flex flex-col items-center text-center"
        >
          <div className="relative w-16 h-16">
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-lime-300 to-lime-500 opacity-60 blur-md" />
            <div className="relative z-10 bg-lime-400 text-black rounded-full w-full h-full flex items-center justify-center text-xl font-bold shadow-xl scale-110 transition-transform duration-300">
              2
            </div>
          </div>
          <p className="mt-2 font-semibold text-black text-lg underline decoration-lime-500 decoration-2 underline-offset-4">
            Valuation
          </p>
        </div>

        <div className="border-t border-dashed border-gray-400 w-1/5 hidden md:block" />

        {/* Step 3 */}
        <div
          ref={(el) => (stepsRef.current[2] = el)}
          className="flex flex-col items-center text-center"
        >
          <div className="bg-lime-400 text-black rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold">
            3
          </div>
          <p className="mt-2 font-medium text-black">Resource Hub</p>
        </div>
      </div>
    </section>
  )
}
export default MilestoneSec