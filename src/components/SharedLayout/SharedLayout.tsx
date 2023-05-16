import Header from 'components/Header';
import Navigation from 'components/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <Suspense fallback={<h2>Loading</h2>}>
      <Header />
      <Navigation />
      <Outlet />
    </Suspense>
  );
}