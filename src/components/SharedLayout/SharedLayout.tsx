import Header from 'components/Header';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ButtonUp from 'components/ButtonUp';
import { OutletWrapper } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <>
      <Navigation />
      <Header />
      <OutletWrapper>
        <ButtonUp />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </OutletWrapper>
    </>
  );
}
