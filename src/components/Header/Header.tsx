// import { Fragment } from 'react';
// import Media from 'react-media';
import Modal from 'components/Modal/Modal';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import translateRole from 'utils/translate-role';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useState } from 'react';
import {
  AiOutlineLogout,
  // AiOutlineUser, AiOutlineMenu
} from 'react-icons/ai';
import { logoutUser, selectUser } from 'redux/user';
import { Roles } from 'helpers/constants';
import { NavLink } from 'react-router-dom';
import {
  ElWrapper,
  // HeaderTag
} from './Header.styled';
import CardTitleStringMarkup from 'components/CardTitleStringMarkup';
import CardDetailStringMarkup from 'components/CardDetailStringMarkup';
import {
  Button,
  // ControlLink
} from 'helpers/styles';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    user: { name, surname, role },
  } = useAppSelector(selectUser);

  const dispatch = useAppDispatch();
  return (
    <div>
      {/* <Media
        queries={{
          mobile: '(max-width: 767px)',
          tabletDesktop: '(min-width: 768px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.mobile && (
              <HeaderTag>
                <ElWrapper>
                  <ControlLink to="/profile" variant="circlePrimary">
                    <AiOutlineUser size={24} />
                  </ControlLink>
                  <Button type="button" variant="circlePrimary">
                    <AiOutlineMenu size={24} />
                  </Button>
                </ElWrapper>
                {isModalOpen && (
                  <Modal onClose={() => setIsModalOpen(false)}>
                    <ModalLogout
                      onClose={() => setIsModalOpen(false)}
                      handleLogout={() => dispatch(logoutUser())}
                    />
                  </Modal>
                )}
              </HeaderTag>
            )}
            {matches.tabletDesktop && (
              <HeaderTag> */}
      <ElWrapper>
        <NavLink to="/profile">
          <CardTitleStringMarkup value={name} additionalValue={surname} />

          {role && (
            <CardDetailStringMarkup value={translateRole(Roles[role])} />
          )}
        </NavLink>
        <Button
          variant="content"
          type="button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setIsModalOpen(true)
          }
        >
          <AiOutlineLogout size={24} />
        </Button>
      </ElWrapper>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ModalLogout
            onClose={() => setIsModalOpen(false)}
            handleLogout={() => dispatch(logoutUser())}
          />
        </Modal>
      )}
      {/* </HeaderTag>
            )}
          </Fragment>
        )}
      </Media> */}
    </div>
  );
}
