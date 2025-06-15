import React from "react";

const valuationMethods = [
    {
      title: "Why Valuation?",
      value: "valuation",
      content: (
        <>
          <div className="text-justify leading-loose text-base space-y-6">
            <p>
              Whether you’re raising capital, prepping for an acquisition, or issuing equity to your team, the valuation you land on shapes the entire deal. It sets the tone for how much ownership you give up, how investors view your business, and what future fundraising looks like. Yet most early-stage founders aren’t clear on how investors actually arrive at those numbers.
              The truth is, VCs and angels don’t rely on a single formula. They use a mix of methods based on your stage, traction, and market. Understanding these approaches helps you frame your ask better, avoid common traps, and negotiate with more confidence.
            </p>
          </div>
        </>
      ),
    },{
        title: "Discounted Cash Flow (DCF)", 
        value: "dcf",
        content: (
          <>
            <div className="text-justify leading-loose text-base space-y-6">
              <p>
                DCF is one of the most rigorous valuation methods out there. It’s built on a simple idea — a business is worth the money it will generate in the future, adjusted for the risk of actually getting there. You start by projecting your startup’s future cash flows over the next 5 to 10 years, estimate what the company might be worth at the end of that period (the terminal value), and then discount everything back to today’s value using a required rate of return. The higher the risk, the higher the discount rate, and the lower the present value.
                This method is great for startups with steady revenue and visibility into growth, typically post-Series A or later. But in early-stage deals, DCF often falls apart. Forecasts are guesses, and discount rates are aggressive. A small change in assumptions can swing the valuation dramatically.
              </p>
      
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700 transform transition hover:shadow-2xl relative">
                <a
                  href="https://docs.google.com/spreadsheets/d/1mJNmXtei4GafjTvJeoWbZaaZlqRAj2qO/edit?usp=sharing&ouid=105253476196606856725&rtpof=true&sd=true"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="absolute top-2 right-2 px-3 py-1 bg-gray-900/80 rounded-md shadow-md text-gray-50 font-semibold hover:bg-gray-700 transition ease-in-out duration-300 z-10"
                >
                  Open in Google Sheets
                </a>
                <iframe
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTdCL82rjiyHnqNiPV858PIkPMlvAjkmMeCmfOI-zsEp47OP1HcvxVuTjQH47h69A/pubhtml?gid=2116656387&amp;single=false&amp;widget=false&amp;headers=false"
                  width="100%"
                  height="600px"
                  className="border-none w-full h-[800px]"
                  title="DCF Model"
                  loading="lazy"
                ></iframe>
              </div>
      
            </div>
          </>
        ),
      },
      
    {
      title: "Comparable Company Analysis",
      value: "comp",
      content: (
        <>
          <div className="text-justify leading-loose text-base space-y-6">
            <p>
            This is one of the most common methods used by VCs, bankers, and acquirers, and for good reason. The Comparable Transactions method looks at how similar startups have been valued in recent funding rounds or acquisitions. If startups like yours are raising at $20M pre-money, it sets a baseline for what the market is willing to pay.
            The logic is simple. Find relevant deals, extract the valuation multiples (like revenue or user-based), and apply them to your own numbers. For example, if SaaS startups at your stage are getting 8× ARR and you’re doing $2M ARR, your implied value might sit around $16M.
            But here’s the catch: good comps are hard to find. Many deals are private. The details are often fuzzy. And what looks like a similar company on the surface might have different margins, markets, or teams.
            </p>


          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700 transform transition hover:shadow-2xl relative">
                <a
                  href="https://docs.google.com/spreadsheets/d/1MlfrwI_O2_DMGiuS4_T0s1TEIdQqmrx7/edit?usp=sharing&ouid=105253476196606856725&rtpof=true&sd=true"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="absolute top-2 right-2 px-3 py-1 bg-gray-900/80 rounded-md shadow-md text-gray-50 font-semibold hover:bg-gray-700 transition ease-in-out duration-300 z-10"
                >
                  Open in Google Sheets
                </a>
                <iframe
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT1iUgeLQwTtQVAOvrCbRimxetO0rHKMaT7-P-htFKbO8LkQSjhQ_n5QSnYxVTNPw/pubhtml?gid=1758653578&amp;single=true&amp;widget=true&amp;headers=false"
                  width="100%"
                  height="600px"
                  className="border-none w-full h-[800px]"
                  title="DCF Model"
                  loading="lazy"
                ></iframe>
              </div>
              </div>
    
        </>
      ),
    },
    {
      title: "Venture Capital Method",
      value: "vc",
      content: (
        <>
          <div className="text-justify leading-loose text-base space-y-6">
            <p>
            The Venture Capital Method works backward from the endgame. It starts with a projected exit, through acquisition or IPO, and calculates how much a VC needs to invest today to hit their target return.
            <br/>
            This method is usually done in 6 steps: Estimate the Investment Needed
            Forecast Startup Financials; Determine the Timing of Exit (IPO, M&A, etc.); Calculate Multiple at Exit (based on comps); Discount to PV at the Desired Rate of Return
            Determine Valuation and Desired Ownership Stake; <br/> Here’s the basic flow - estimate your exit valuation (say, $100M in 5 years), then apply the investor’s desired return, often 10x or more. If they want 10x, your startup needs to be worth $10M today. Subtract the size of the investment, and you get your pre-money valuation.
            </p>
            
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700 transform transition hover:shadow-2xl relative">
                <a
                  href="https://docs.google.com/spreadsheets/d/1ycBommtUSjTi3ZWi4FSCEUYuRJdYpsX3/edit?usp=sharing&ouid=105253476196606856725&rtpof=true&sd=true"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="absolute top-2 right-2 px-3 py-1 bg-gray-900/80 rounded-md shadow-md text-gray-50 font-semibold hover:bg-gray-700 transition ease-in-out duration-300 z-10"
                >
                  Open in Google Sheets
                </a>
                <iframe
                   src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSsEPCdsuylmR7cAN23ztacZOkF-LTSfntBeI0yYsn6yQQofaX2J1O6_4-Jx0vkoA/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="600px"
                  className="border-none w-full h-[800px]"
                  title="DCF Model"
                  loading="lazy"
                ></iframe>
              </div>
          </div>
        </>
      ),
    },
    {
      title: "Scorecard Valuation Method",
      value: "scorecard",
      content: (
        <>
          <div className="text-justify leading-loose text-base space-y-6">
            <p>
            The Scorecard Method starts with one question: What’s the going rate for startups like yours in your region? If most pre-seed rounds in your city are getting $3 million pre-money, that becomes the baseline.
            From there, investors adjust up or down based on how your startup stacks up against others in key areas, like team quality, market size, product, traction, and competitive landscape. Each factor has a weight.
            Maybe the team counts for 25%, the market size for 20%, and so on. If your team is stronger than average, that part gets a boost. If your go-to-market looks weak, that portion might get docked.
            </p>
            
          </div>
        </>
      ),
    },
  ];
  
export default valuationMethods;
