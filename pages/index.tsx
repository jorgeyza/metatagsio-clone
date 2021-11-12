import type { NextPage } from 'next';

import SEO from '../components/elements/SEO';
import MainSection from '../components/sections/MainSection';
import NavBar from '../components/sections/NavBar';
import Footer from '../components/sections/Footer';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <NavBar />
      <MainSection />
      <Footer />
    </>
  );
};

export default Home;
