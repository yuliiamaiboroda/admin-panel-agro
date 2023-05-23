import { Outlet } from 'react-router-dom';
import PageTitle from 'components/PageTitle';
// import VacanciesDashboard from 'components/Vacancies/VacanciesDashboard';

export default function VacanciesPage() {
  return (
    <>
      <PageTitle title="Вакансії" />
      {/* <VacanciesDashboard /> */}
      <Outlet />
    </>
  );
}
