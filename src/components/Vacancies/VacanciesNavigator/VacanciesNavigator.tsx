import { NavigationLink } from 'helpers/styles';

export default function VacanciesNavigator() {
  return (
    <nav>
      <ul>
        <li>
          <NavigationLink to={'/vacancies/all-vacancies'}>
            Всі вакансії
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to={'/vacancies/actual-vacancies'}>
            Актуальні вакансії
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to={'/vacancies/irrelevant-vacancies'}>
            Неактуальні вакансії
          </NavigationLink>
        </li>
      </ul>
    </nav>
  );
}
