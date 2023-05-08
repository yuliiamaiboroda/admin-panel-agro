import { useAppSelector } from 'hooks';
import { selectProducts } from 'redux/products';
import ProductsCard from 'components/ProductsCard';

export default function ProductsGallery() {
  const products = useAppSelector(selectProducts);
  return (
    <ul>
      {products.map(({ _id, ...rest }) => (
        <ProductsCard key={_id} {...rest} />
      ))}
    </ul>
  );
}
