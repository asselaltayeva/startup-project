import React from 'react'

function Apply() {
  return (
    <section id="apply" className="pt-26 py-16 px-6 md:px-12 bg-[#0E1D1C] text-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Investor Directory
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Access a curated directory of investors and funding sources for your venture.
        </p>

        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTybqF6XbiCpy_fJl_c50hQn6dRskQVJsseTMtqnuPtS2quRWH_o8TYHEIwR5nB1k3FPnZOlmiravup/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
          width="100%"
          height="600"
          className="rounded-lg shadow-lg border-none"
          title="Investor Directory"
        ></iframe>
      </div>
    </section>
  )
}

export default Apply

