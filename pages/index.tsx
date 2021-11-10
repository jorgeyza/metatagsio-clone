import type { NextPage } from 'next';
import NavBar from '../components/NavBar';

import SEO from '../components/SEO';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <NavBar />
    </>
  );
};

export default Home;
