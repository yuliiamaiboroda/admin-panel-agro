import Header from 'components/Header';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ButtonUp from 'components/ButtonUp';

export default function SharedLayout() {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Navigation />
      <ButtonUp />
      <Outlet />
    </Suspense>
  );
}
