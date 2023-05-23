enum ROLES {
  admin = 'admin',
  applyManager = 'applyManager',
  servicesManager = 'servicesManager',
  productsManager = 'productsManager',
}

export default function translateRole(role: ROLES | string): string {
  let translatedRole = '';

  switch (role) {
    case ROLES.admin || 'admin':
      translatedRole = 'Адміністратор';
      break;
    case ROLES.applyManager || 'applyManager':
      translatedRole = 'Менеджер з найму';
      break;
    case ROLES.productsManager || 'servicesManager':
      translatedRole = 'Менеджер з продукції компанії';
      break;
    case ROLES.servicesManager || 'productsManager':
      translatedRole = 'Менеджер з послуг компанії';
      break;
    default:
      translatedRole = '';
      break;
  }
  return translatedRole;
}
