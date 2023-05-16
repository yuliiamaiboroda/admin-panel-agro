import { useAppSelector } from 'hooks';
import { selectServices } from 'redux/services';

import ServiceCard from 'components/ServiceCard';

export default function ServicesGallery() {
  const services = useAppSelector(selectServices);

  return (
    <ul>
      {services.map(({ _id, ...rest }) => (
        <ServiceCard key={_id} _id={_id} {...rest} />
      ))}
    </ul>
  );
}
