import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PageTitle from 'components/PageTitle';
import UsersDashboard from 'components/Users/UsersDashboard';
import Loader from 'components/Loader';

export default function UsersPage() {
  return (
    <>
      <PageTitle title="Користувачі" />
      <UsersDashboard />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
