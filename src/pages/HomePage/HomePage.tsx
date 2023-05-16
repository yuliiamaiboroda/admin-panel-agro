import { NavLink, Outlet } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectUser } from 'redux/user';

const navigationLinks = [
  { href: '/users', title: 'Users' },
  { href: '/products', title: 'Products' },
  { href: '/services', title: 'Services' },
  { href: '/vacancies', title: 'Vacancies' },
  { href: '/resumes', title: 'Resumes' },
  { href: '/feedbacks', title: 'Feedbacks' },
];

export default function HomePage() {
  const { user } = useAppSelector(selectUser);
  return (
    <div>
      <header>
        <h2>
          {user.name} {user.surname}
        </h2>
        <p>{user.role}</p>
      </header>
      <nav>
        <ul>
          {navigationLinks.map(({ href, title }) => (
            <li key={href}>
              <NavLink to={href}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
