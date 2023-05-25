import PageTitle from 'components/PageTitle';
import UsersDashboard from 'components/Users/UsersDashboard';
import { Outlet } from 'react-router-dom';

export default function UsersPage() {
  return (
    <>
      <PageTitle title="Користувачі" />
      <UsersDashboard />
      <Outlet />
    </>
  );
}
