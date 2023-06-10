import { useEffect, useState } from 'react';
import { StyledButtonUp } from './ButtonUp.styled';
import { AiOutlineArrowUp } from 'react-icons/ai';

export default function ButtonUp() {
  const [isShownButton, setIsShownButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScrollVisibility = () => {
      window.pageYOffset > 300
        ? setIsShownButton(true)
        : setIsShownButton(false);
    };

    window.addEventListener('scroll', handleScrollVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollVisibility);
    };
  }, []);

  return (
    <>
      {isShownButton && (
        <StyledButtonUp
          type="button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleScrollToTop()
          }
          variant="circleSecondary"
          // width="45px"
          // height="45px"
          // position="fixed"
        >
          <AiOutlineArrowUp size={24} />
        </StyledButtonUp>
      )}
    </>
  );
}
