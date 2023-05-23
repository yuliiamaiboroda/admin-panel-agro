import { Roles } from 'helpers/constants';

export default function translateRole(role: Roles): string {
  let translatedRole = '';

  switch (role) {
    case Roles.admin:
      translatedRole = 'Адміністратор';
      break;
    case Roles.applyManager:
      translatedRole = 'Менеджер з найму';
      break;
    case Roles.productsManager:
      translatedRole = 'Менеджер з продукції компанії';
      break;
    case Roles.servicesManager:
      translatedRole = 'Менеджер з послуг компанії';
      break;
    default:
      translatedRole = '';
      break;
  }
  return translatedRole;
}
