import React from 'react';
import PreSeed from '../../assets/PreSeed.png';
import Seed from '../../assets/Seed.png';
import SeriesA from '../../assets/SeriesA.png';
import SeriesB from '../../assets/SeriesB.png';
import SeriesC from '../../assets/SeriesC.png';
import IPO from '../../assets/IPO.png';

const imageStyles = 'w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-md overflow-hidden';

function Funding() {
  return (
    <section className="bg-[#f4e8d1] text-black font-body py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-[80rem] mx-auto space-y-24">
        <h2
      className="text-3xl md:text-4xl tracking-tight font-semibold"
      style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '90px',
            fontWeight: 'var(--text-heading-weight)',
            letterSpacing: 'var(--text-heading-letter-spacing)',
            lineHeight: 'var(--text-heading-line-height)',
          }}
        >
          Everything You Need to Know <br /> About 
          <span className="italic text-lime-600 primary-glow"> Funding Rounds</span>
        </h2>


        {/* Section */}
        {[
          {
            title: 'Pre-Seed Funding',
            img: PreSeed,
            reverse: false,
            content: [
              'This investment round takes place before the startup has achieved product-market fit or generated any revenue. At this stage, the company may only have an idea, a prototype, or a small founding team.',
              'Investors provide funding in exchange for equity. Founders typically raise between $150K and $1M.',
            ],
          },
          {
            title: 'Seed Funding',
            img: Seed,
            reverse: true,
            content: [
              'This is the traditional entry point for investment. By this point, the startup usually has a validated idea, an MVP, and some traction or revenue.',
              'The goal is to refine the product and find product-market fit. Founders often raise between $1M and $5M.',
            ],
          },
          {
            title: 'Series A Funding',
            img: SeriesA,
            reverse: false,
            content: [
              'A company seeing Series A funding has got a finalised product and an established user base, with a clear path for further growth. Revenue, while still small, will be consistent, and the goal of the company will be to rapidly scale, establish a long-term growth strategy, and keep the company liquid until the revenue can finance the business by itself.',
              'Funding rounds often range from $5M to $15M, involving venture capital firms.'
              
            ],
          },
          {
            title: 'Series B Funding',
            img: SeriesB,
            reverse: true,
            content: [
              'By the time your business is canvassing Series B investment, it’s a proven business. The customer base is growing, the product-market fit has been validated, and the opportunity for further growth is clear.',
              'Series B funding is significant, anything from $15M to $900M',
            ],
          },
          {
            title: 'Series C Funding',
            img: SeriesC,
            reverse: false,
            content: [
              'Series C funding is the final round of a traditional private equity funding cycle (though in many cases organizations now go on to a Series D, E and F round too). Founders will deploy Series C funding to expand into new markets (for example, grow internationally), acquire smaller businesses, and develop new products and market offerings.',
              'Series C is the big-ticket investment round, for anything from $30M to multiple billions of dollars.',
            ],
          },
          {
            title: 'Initial Public Offering (IPO)',
            img: IPO,
            reverse: true,
            content: [
              'The final stage for most businesses is to take the company public and list it on the stock market. The IPO provides the business with a deep pool of new money to use, which it will deploy in a similar manner to Series C funding. It will be used to fuel growth through new markets, acquisitions, and new products.',
              'IPO funding varies widely but typically exceeds $100M.',
            ],
          },
        ].map(({ title, img, content, reverse }, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10`}
          >
            <figure className="w-full lg:w-1/2 overflow-hidden rounded-2xl">
              <img src={img} alt={title} className={imageStyles} />
            </figure>
            <div className="w-full lg:w-1/2 space-y-5">
              <h3 className="text-4xl font-semibold italic text-lime-600 mb-4">{title}</h3>
              {content.map((paragraph, i) => (
                <p key={i} className="text-lg font-light leading-relaxed">
                  {paragraph.includes('$') ? <strong>{paragraph}</strong> : paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Funding;
