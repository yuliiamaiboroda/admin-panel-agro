import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllProducts, selectProducts } from 'redux/products';

export default function ProductsPage() {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products page</h1>
      <ul>
        {products.map(({ _id, title, imageURL, description }) => (
          <li key={_id}>
            <h2>{title}</h2>
            <img src={imageURL} alt={title} width="150" height="auto" />
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
