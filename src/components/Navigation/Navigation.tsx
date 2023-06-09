import { Fragment } from 'react';
import Media from 'react-media';
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
import { SidebarDiv, SidebarWrap, Title } from './Navigation.styled';
import Box from 'components/Box';
import { NavigationLink } from 'helpers/styles';

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
    icon: MdOutlineFeed,
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
    <div>
      <Media
        queries={{
          mobile: '(max-width: 767px)',
          tabletDesktop: '(min-width: 768px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.mobile && null}
            {matches.tabletDesktop && (
              <Box
                position="fixed"
                top={0}
                left={0}
                bottom={0}
                width="260px"
                height="100vh"
                bg="primaryBackground"
              >
                <SidebarDiv>
                  <img
                    src={process.env.PUBLIC_URL + '/Logo.png'}
                    alt="logo"
                    width="218px"
                    height="178px"
                  />
                  <Title>Сторінки</Title>
                  <SidebarWrap>
                    {navigationLinks.map(
                      ({ href, title, access, icon: Icon }, index) => {
                        return (
                          <RestrictedComponent key={index} accessRight={access}>
                            <li>
                              <NavigationLink to={href}>
                                <Icon size={20} />
                                {title}
                              </NavigationLink>
                            </li>
                          </RestrictedComponent>
                        );
                      }
                    )}
                  </SidebarWrap>
                </SidebarDiv>
              </Box>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
}
