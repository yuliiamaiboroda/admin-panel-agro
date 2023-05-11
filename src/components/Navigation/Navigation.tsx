import { useAppSelector } from 'hooks';
import { NavLink } from 'react-router-dom';
import { selectUser } from 'redux/user';

enum ROLES {
  admin = 'admin',
  applyManager = 'applyManager',
  servicesManager = 'servicesManager',
  productsManager = 'productsManager',
  freeAccess = 'free',
}

interface ILink {
  href: string;
  title: string;
  access: ROLES;
}

const navigationLinks: ILink[] = [
  { href: '/users', title: 'Users', access: ROLES.admin },
  { href: '/products', title: 'Products', access: ROLES.freeAccess },
  { href: '/services', title: 'Services', access: ROLES.freeAccess },
  { href: '/vacancies', title: 'Vacancies', access: ROLES.freeAccess },
  { href: '/resumes', title: 'Resumes', access: ROLES.applyManager },
  { href: '/feedbacks', title: 'Feedbacks', access: ROLES.admin },
];

export default function Navigation() {
  const currentUser = useAppSelector(selectUser);
  const currentRole = currentUser.user.role;

  const isAccessRights = () => {
    if (currentRole === ROLES.admin) {
      return navigationLinks;
    } else {
      return navigationLinks.filter(
        el => el.access === currentRole || el.access === ROLES.freeAccess
      );
    }
  };

  return (
    <ul>
      {isAccessRights().map(({ href, title }, index) => (
        <li key={index}>
          <NavLink to={href}>{title}</NavLink>
        </li>
      ))}
    </ul>
  );
}
