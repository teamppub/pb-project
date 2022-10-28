import type { NextPage } from 'next';

import { Box, Layout } from 'components/Atoms';
import MainContainer from 'components/Organisms/Main/MainContainer';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <MainContainer />
      </Layout>
    </>
  );
};

export default Home;
