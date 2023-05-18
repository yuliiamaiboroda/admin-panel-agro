import { useAppSelector } from 'hooks';
import { selectIsLoading, selectServices } from 'redux/services';

import ServiceCard from 'components/ServiceCard';
import Loader from 'components/Loader';

export default function ServicesGallery() {
  const services = useAppSelector(selectServices);
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <ul>
      {isLoading ? (
        <Loader />
      ) : (
        services.map(({ _id, ...rest }) => (
          <ServiceCard key={_id} _id={_id} {...rest} />
        ))
      )}
    </ul>
  );
}
