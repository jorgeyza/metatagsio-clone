import type { NextPage } from 'next';
import MainSection from '../components/sections/MainSection';
import NavBar from '../components/sections/NavBar';

import SEO from '../components/elements/SEO';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <NavBar />
      <MainSection />
    </>
  );
};

export default Home;
