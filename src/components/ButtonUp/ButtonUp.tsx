import { useEffect, useState } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { Button, ArrowUp } from './ButtonUp.styled';

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
        <Button
          type="button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleScrollToTop()
          }
        >
          <ArrowUp />
        </Button>
      )}
    </>
  );
}
