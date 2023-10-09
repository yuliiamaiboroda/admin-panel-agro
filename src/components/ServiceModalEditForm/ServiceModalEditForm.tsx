import { useNavigate, useLocation } from 'react-router-dom';
import { selectCertainService, updateService } from 'redux/services';
import { useAppSelector, useAppDispatch, useModalOutlet } from 'hooks';
import ServiceForm from 'components/ServiceForm';

export default function ServiceModalEditForm() {
  const service = useAppSelector(selectCertainService);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { handleCloseModal } = useModalOutlet();

  const backLinkHref = location.state?.from ?? '/services';

  if (!service) {
    return null;
  }

  return (
    <ServiceForm
      serviceData={service}
      onSubmit={serviceData => {
        dispatch(updateService({ ...serviceData, id: service.id }));
        if (backLinkHref === '/services') {
          handleCloseModal(backLinkHref);
        } else {
          navigate(backLinkHref);
        }
      }}
      onCancel={() => {
        if (backLinkHref === '/services') {
          handleCloseModal(backLinkHref);
        } else {
          navigate(backLinkHref);
        }
      }}
    />
  );
}
