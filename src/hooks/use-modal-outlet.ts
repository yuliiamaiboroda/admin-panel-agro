import { useOutletContext } from 'react-router-dom';

export const useModalOutlet = () => {
  return useOutletContext<{ handleCloseModal: (navigateTo: any) => void }>();
};
