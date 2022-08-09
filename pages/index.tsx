import type { NextPage } from 'next';

import { Box, Layout } from 'components/Atoms';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Box>fontWeight Test</Box>
        <Box fontWeight={700}>bold - 700</Box>
        <Box fontWeight={500}>medium - 500</Box>
        <Box fontWeight={400}>normal - 400</Box>
        <Box fontWeight={200}>light - 300</Box>
      </Layout>
    </>
  );
};

export default Home;
