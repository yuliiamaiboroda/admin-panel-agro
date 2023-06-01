import { Errors } from 'helpers/constants';

export default function translateError(error: string): string {
  let translatedError = '';

  switch (error) {
    case Errors.notAuthorized:
      translatedError = 'Потрібно авторизуватись';
      break;
    case Errors.notFound:
      translatedError = 'Не знайдено';
      break;
    case Errors.emailInUse:
      translatedError = 'Електронна адреса вже використовується';
      break;
    case Errors.notHaveAccess:
      translatedError = 'У вас немає прав доступу до цього контенту';
      break;
    case Errors.fileRequired:
      translatedError = "Файл є обов'язковим";
      break;
    case Errors.storageFailed:
      translatedError = 'Помилка в базі даних';
      break;
    case Errors.forbiddenDelete:
      translatedError = 'У вас немає прав доступу для видалення цього контенту';
      break;
    case Errors.wrongPass:
      translatedError = 'Не вірний пароль';
      break;
    case Errors.serverError:
      translatedError = 'Помилка сервера';
      break;
    case Errors.somethingWrong:
      translatedError = 'Щось пішло не так ...';
      break;
    case Errors.isAlreadyViewed:
      translatedError = 'Цю картку вже переглянуто';
      break;

    default:
      translatedError = error;
  }
  return translatedError;
}
