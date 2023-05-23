import { NavLink } from 'react-router-dom';

export default function VacanciesNavigator() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/vacancies/all-vacancies'}>Всі вакансії</NavLink>
        </li>
        <li>
          <NavLink to={'/vacancies/actual-vacancies'}>
            Актуальні вакансії
          </NavLink>
        </li>
        <li>
          <NavLink to={'/vacancies/irrelevant-vacancies'}>
            Неактуальні вакансії
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
