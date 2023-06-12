import { HiUsers, HiOutlineTruck } from 'react-icons/hi';
import {
  MdProductionQuantityLimits,
  MdWork,
  MdFeedback,
  MdOutlineFeed,
} from 'react-icons/md';
import { IconType } from 'react-icons';
import { Roles, USER_ROLES } from 'helpers/constants';
import RestrictedComponent from 'components/RestrictedComponent';
import Box from 'components/Box';
import { NavigationLink } from 'helpers/styles';

interface ILink {
  href: string;
  title: string;
  access: Roles | Roles[];
  icon: IconType;
}

interface IProps {
  onClick?: () => void;
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
    icon: MdOutlineFeed,
  },
  {
    href: '/feedbacks',
    title: 'Фідбеки',
    access: Roles.admin,
    icon: MdFeedback,
  },
];

export default function Navigation({ onClick }: IProps) {
  return (
    <ul>
      {navigationLinks.map(({ href, title, access, icon: Icon }, index) => {
        return (
          <RestrictedComponent key={index} accessRight={access}>
            <Box width="100%" as="li">
              <NavigationLink to={href} onClick={onClick}>
                <Icon size={20} />
                {title}
              </NavigationLink>
            </Box>
          </RestrictedComponent>
        );
      })}
    </ul>
  );
}
