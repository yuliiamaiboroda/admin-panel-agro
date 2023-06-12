import Modal from 'components/Modal/Modal';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import translateRole from 'utils/translate-role';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useState } from 'react';
import { AiOutlineLogout, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { logoutUser, selectUser } from 'redux/user';
import { Roles } from 'helpers/constants';
import { Link } from 'react-router-dom';
import CardTitleStringMarkup from 'components/CardTitleStringMarkup';
import CardDetailStringMarkup from 'components/CardDetailStringMarkup';
import { Button, ControlLink } from 'helpers/styles';
import Box from 'components/Box';
import ModalMobileMenu from 'components/ModalMobileMenu';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const {
    user: { name, surname, role },
  } = useAppSelector(selectUser);

  const dispatch = useAppDispatch();
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent={['space-between', 'end']}
        width="100%"
        gridGap={4}
        px={4}
        py={2}
        as="header"
      >
        <Box display={['none', 'block']}>
          <Link to="/profile">
            <CardTitleStringMarkup value={name} additionalValue={surname} />

            {role && (
              <CardDetailStringMarkup value={translateRole(Roles[role])} />
            )}
          </Link>
        </Box>
        <ControlLink
          to="/profile"
          variant="circlePrimary"
          display={['flex', 'none']}
        >
          <AiOutlineUser size={24} />
        </ControlLink>
        <Button
          type="button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setIsModalOpen(true)
          }
          variant="content"
          display={['none', 'flex']}
        >
          <AiOutlineLogout size={24} />
        </Button>
        <Button
          type="button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setIsMobileMenuOpen(true)
          }
          variant="circlePrimary"
          display={['flex', 'none']}
        >
          <AiOutlineMenu size={24} />
        </Button>
      </Box>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ModalLogout
            onClose={() => setIsModalOpen(false)}
            handleLogout={() => dispatch(logoutUser())}
          />
        </Modal>
      )}
      {isMobileMenuOpen && (
        <Modal onClose={() => setIsMobileMenuOpen(false)}>
          <ModalMobileMenu
            title="Меню"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </Modal>
      )}
    </>
  );
}
