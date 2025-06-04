import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const methods = [
  {
    title: 'Cost-to-Duplicate',
    description:
      "This approach involves calculating how much it would cost to build another company just like it from scratch. The idea is that a smart investor wouldn't pay more than it would cost to duplicate. This approach will often look at the physical assets to determine their fair market value.The cost to duplicate a software business, for instance, might be figured as the total cost of programming time that has gone into designing its software. For a high-technology startup, it could be the costs to date of research and development, patent protection, and prototype development. The cost-to-duplicate approach is often seen as a starting point for valuing startups since it is fairly objective. After all, it is based on verifiable, historic expense records.",
  },
  {
    title: 'Market Multiple',
    description:
      "Venture capital investors like this approach, as it gives them a pretty good indication of what the market is willing to pay for a company. Basically, the market multiple approach values the company against recent acquisitions of similar companies in the market.",
  },
  {
    title: 'Discounted Cash Flow (DCF)',
    description:
      "For most startups, especially those that have yet to start generating earnings, the bulk of the value rests on future potential. Discounted cash flow analysis then represents an important valuation approach. DCF involves forecasting how much cash flow the company will produce in the future and then, using an expected rate of investment return, calculating how much that cash flow is worth. A higher discount rate is typically applied to startups, as there is a high risk that the company will fail to generate sustainable cash flows.",


  },
  {
    title: 'Cost-to-Exact-Quality (CEQ)',
    description:
      'This method calculates valuation based on the cost of replicating your startup’s assets, team, and product quality.',
  },
]

function Valuation() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i === 0 ? methods.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === methods.length - 1 ? 0 : i + 1))

  return (
    <section className="bg-[#f4e8d1] text-black font-body py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-[80rem] mx-auto space-y-20">
        {/* Heading */}
        <h2
          className="tracking-tight font-semibold"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '90px',
            fontWeight: 'var(--text-heading-weight)',
            letterSpacing: 'var(--text-heading-letter-spacing)',
            lineHeight: 'var(--text-heading-line-height)',
          }}
        >
          Everything You Need to Know <br />
          About <span className="italic text-lime-600 primary-glow">Funding Rounds</span>
        </h2>

        {/* Carousel Framed Box */}
        <div className="max-w-5xl mx-auto bg-white border border-gray-300 rounded-xl p-10 shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-lime-600 text-center">
            Startup Valuation Methods
          </h3>
          <div className="relative h-60">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute w-full text-center min-h-[240px]"
              >
                <h4 className="text-xl font-semibold text-black">{methods[index].title}</h4>
                <p className="mt-3 text-gray-700 px-2 md:px-12">{methods[index].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              aria-label="Previous method"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              aria-label="Next method"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 shadow-md min-h-[200px] flex flex-col justify-center mt-12">
        <h3 className="text-2xl font-bold mb-6 text-lime-600 text-center">
             Valuation Calculator
          </h3>
        
          <div className="mt-4 text-center italic text-gray-400">
            [Coming Soon]
          </div>
        </div>
      </div>
    </section>
  )
}

export default Valuation
