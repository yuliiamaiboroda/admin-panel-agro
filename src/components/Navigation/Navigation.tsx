import { NavLink } from 'react-router-dom';
import { HiUsers, HiOutlineTruck } from 'react-icons/hi';
import { MdProductionQuantityLimits, MdWork, MdFeedback } from 'react-icons/md';
import { GrUserWorker } from 'react-icons/gr';
import { IconType } from 'react-icons';
import { Roles, USER_ROLES } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';
import { SidebarDiv, SidebarWrap } from './Navigation.styled';

interface ILink {
  href: string;
  title: string;
  access: Roles | Roles[];
  icon: IconType;
}

const navigationLinks: ILink[] = [
  { href: '/users', title: 'Користувачі', access: Roles.admin, icon: HiUsers },
  {
    href: '/products',
    title: 'Продукти компанії',
    access: USER_ROLES,
    icon: MdProductionQuantityLimits,
  },
  {
    href: '/services',
    title: 'Послуги компанії',
    access: USER_ROLES,
    icon: HiOutlineTruck,
  },
  {
    href: '/vacancies',
    title: 'Вакансії',
    access: USER_ROLES,
    icon: MdWork,
  },
  {
    href: '/resumes',
    title: 'Резюме',
    access: Roles.applyManager,
    icon: GrUserWorker,
  },
  {
    href: '/feedbacks',
    title: 'Фідбеки',
    access: Roles.admin,
    icon: MdFeedback,
  },
];

export default function Navigation() {
  return (
    <SidebarDiv>
      Pages
      <SidebarWrap>
        {navigationLinks.map(({ href, title, access, icon: Icon }, index) => {
          return (
            <RestrictedComponent key={index} accessRight={access}>
              <li>
                <NavLink to={href}>
                  <Icon />
                  {title}
                </NavLink>
              </li>
            </RestrictedComponent>
          );
        })}
      </SidebarWrap>
    </SidebarDiv>
  );
}
