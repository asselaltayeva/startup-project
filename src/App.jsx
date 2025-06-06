//page
import Page from "./components/sections/Page";

//header
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";

import Main from "./components/sections/Main";
import Funding from "./components/sections/Funding";
import MilestoneIntro from "./components/sections/MilestoneIntro";
import MilestoneSec from "./components/sections/MilestoneSec";
import FAQs from "./components/sections/FAQs/FAQs";
import Valuation from "./components/sections/Valuation";
import Footer from "./components/sections/Footer";

function App() {
  return ( 
  <Page>
    <Header> 
      <Navigation />
      <Hero/>
    </Header>

    <Main>
      <MilestoneIntro />
      <Funding />
      <FAQs />
      <MilestoneSec />
      <Valuation />
      <Footer />
    </Main>
  </Page>
  );
}

export default App;
