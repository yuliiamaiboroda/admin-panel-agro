import { Outlet } from 'react-router-dom';
import PageTitle from 'components/PageTitle';
import UsersDashboard from 'components/UsersDashboard';

export default function UsersPage() {
  return (
    <>
      <PageTitle title="Користувачі" />
      <UsersDashboard />
      <Outlet />
    </>
  );
}
