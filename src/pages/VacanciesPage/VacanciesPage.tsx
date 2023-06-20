import { Outlet } from 'react-router-dom';
import PageTitle from 'components/PageTitle';

export default function VacanciesPage() {
  return (
    <>
      <PageTitle title="Вакансії" />
      <Outlet />
    </>
  );
}
