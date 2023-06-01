// import Box from 'components/Box';
import { useNavigate } from 'react-router-dom';
import { Categories } from 'helpers/constants';
import translateCategory from 'utils/translate-vacancy-category';
// import { Roles } from 'helpers/constants';
// import translateRole from 'utils/translate-role';
import type { Roles } from 'helpers/constants';

import { CardWrapper, Details, Image, Li, Title } from './CardMarkup.styled';

interface IProps {
  _id: string;
  title?: string | null;
  description?: string | null;
  category?: keyof typeof Categories | null;
  imageURL?: string | null;
  price?: string | null;
  contactMail?: string | null;
  contactPhone?: string | null;
  sallary?: string | null;
  education?: string | null;
  workExperienceRequired?: string | null;
  location?: string | null;
  email?: string | null;
  name?: string | null;
  surname?: string | null;
  role?: keyof typeof Roles | null;
  children?: React.ReactNode;
}

export default function CardMarkup({
  _id,
  title = null,
  description = null,
  category = null,
  imageURL = null,
  price = null,
  contactMail = null,
  contactPhone = null,
  sallary = null,
  education = null,
  workExperienceRequired = null,
  location = null,
  email = null,
  name = null,
  surname = null,
  role = null,
  children,
}: IProps) {
  const navigate = useNavigate();

  return (
    <Li
      onClick={event => {
        if (!(event.target instanceof HTMLAnchorElement)) {
          navigate(`${_id}`);
        }
      }}
    >
      <CardWrapper>
        {imageURL && title && (
          <Image src={imageURL} alt={title} width="348" height="222" />
        )}
        {title && <Title>{title}</Title>}
        {name && (
          <Title>
            <b>Користувач: </b>
            {name} {surname}
          </Title>
        )}
        {description && (
          <Details>
            <b>Опис: </b>
            {description}
          </Details>
        )}
        {category && (
          <Details>
            <b>Категорія: </b>
            {translateCategory(category)}
          </Details>
        )}
        {price && (
          <Details>
            <b>Ціна: </b>
            {price} грн/годину ???
          </Details>
        )}
        {sallary && (
          <Details>
            <b>Зарплатня: </b>
            {sallary}
          </Details>
        )}
        {education && (
          <Details>
            <b>Освіта: </b>
            {education}
          </Details>
        )}
        {workExperienceRequired && (
          <Details>
            <b>Необхідний досвід роботи: </b>
            {workExperienceRequired}
          </Details>
        )}
        {location && (
          <Details>
            <b>Локація: </b>
            {location}
          </Details>
        )}
        {contactPhone && (
          <Details>
            <b>Контактний телефон: </b>
            {contactPhone}
          </Details>
        )}
        {contactMail && (
          <Details>
            <b>Контактна пошта: </b>
            {contactMail}
          </Details>
        )}
        {email && (
          <Details>
            <b>Електронна пошта: </b>
            {email}
          </Details>
        )}
        {role && (
          <Details>
            <b>Роль: </b>
            {role}
          </Details>
        )}

        {children}
      </CardWrapper>
    </Li>
  );
}
