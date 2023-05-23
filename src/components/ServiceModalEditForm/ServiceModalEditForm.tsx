import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks';
import { selectCertainService, updateService } from 'redux/services';
import ServiceForm from 'components/ServiceForm';

export default function ServiceModalEditForm() {
  const service = useAppSelector(selectCertainService);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/services';

  if (!service) {
    return null;
  }

  return (
    <ServiceForm
      serviceData={service}
      onSubmit={serviceData => {
        dispatch(updateService({ ...serviceData, _id: service._id }));
        navigate(backLinkHref);
      }}
      onCancel={() => navigate(backLinkHref)}
    />
  );
}
