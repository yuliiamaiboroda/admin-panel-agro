import { useAppSelector } from 'hooks';
import { NavLink } from 'react-router-dom';
import { selectUser } from 'redux/user';
import { HiUsers, HiOutlineTruck } from 'react-icons/hi';
import { MdProductionQuantityLimits, MdWork, MdFeedback } from 'react-icons/md';
import { GrUserWorker } from 'react-icons/gr';
import { IconType } from 'react-icons';

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
  icon: IconType;
}

const navigationLinks: ILink[] = [
  { href: '/users', title: 'Користувачі', access: ROLES.admin, icon: HiUsers },
  {
    href: '/products',
    title: 'Продукти компанії',
    access: ROLES.freeAccess,
    icon: MdProductionQuantityLimits,
  },
  {
    href: '/services',
    title: 'Послуги компанії',
    access: ROLES.freeAccess,
    icon: HiOutlineTruck,
  },
  {
    href: '/vacancies',
    title: 'Вакансії',
    access: ROLES.freeAccess,
    icon: MdWork,
  },
  {
    href: '/resumes',
    title: 'Резюме',
    access: ROLES.applyManager,
    icon: GrUserWorker,
  },
  {
    href: '/feedbacks',
    title: 'Фідбеки',
    access: ROLES.admin,
    icon: MdFeedback,
  },
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
      {isAccessRights().map(({ href, title, icon }, index) => {
        const Icon = icon;
        return (
          <li key={index}>
            <NavLink to={href}>
              <Icon />
              {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
