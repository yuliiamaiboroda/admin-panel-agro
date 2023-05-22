import Header from 'components/Header';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <Suspense fallback={<Loader top="" />}>
      <Header />
      <Navigation />
      <Outlet />
    </Suspense>
  );
}
