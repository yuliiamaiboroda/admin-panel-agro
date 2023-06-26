import translateRole from 'utils/translate-role';
import { Roles } from './user-roles';

export const listUsersOptions = [
  {
    name: 'role',
    type: 'radio',
    id: Roles.admin,
    value: Roles.admin,
    shownName: translateRole(Roles.admin),
  },
  {
    name: 'role',
    type: 'radio',
    id: Roles.applyManager,
    value: Roles.applyManager,
    shownName: translateRole(Roles.applyManager),
  },
  {
    name: 'role',
    type: 'radio',
    id: Roles.servicesManager,
    value: Roles.servicesManager,
    shownName: translateRole(Roles.servicesManager),
  },
  {
    name: 'role',
    type: 'radio',
    id: Roles.productsManager,
    value: Roles.productsManager,
    shownName: translateRole(Roles.productsManager),
  },
];
