import Header from 'components/Header';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ButtonUp from 'components/ButtonUp';
import Box from 'components/Box';

export default function SharedLayout() {
  return (
    <>
      <Navigation />

      <Box
        position="absolute"
        top={0}
        right={0}
        left="260px"
        width="100vh"
        height="99px"
        //TODO: change header height
      >
        <Header />
      </Box>
      <Box
        m={0}
        pt="99px"
        //TODO: change header height
        pl="260px"
      >
        <ButtonUp />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
}
