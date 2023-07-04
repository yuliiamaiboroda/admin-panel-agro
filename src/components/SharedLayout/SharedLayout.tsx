import Header from 'components/Header';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ButtonUp from 'components/ButtonUp';
import Box from 'components/Box';
import SideBarNavigation from 'components/SideBarNavigation';

export default function SharedLayout() {
  return (
    <Box display="flex" maxWidth={['480px', '768px', '1200px']} mx="auto">
      <SideBarNavigation />
      <Box flexGrow={1} pb={5}>
        <Header />
        <ButtonUp />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
}
