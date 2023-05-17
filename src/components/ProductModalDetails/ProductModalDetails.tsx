import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectProducts } from 'redux/products';
import type { IProduct } from 'redux/products';

export default function ProductModalDetails() {
  const [choosedProduct, setChoosedProduct] = useState<IProduct>();
  const products = useAppSelector(selectProducts);
  const { productId } = useParams();

  useEffect(() => {
    const product = products.find(product => product._id === productId);
    if (product) {
      setChoosedProduct(product);
    }
  }, [productId, products]);

  if (!choosedProduct) {
    return <h1>Ooops... o_o</h1>;
  }

  const { title, description, imageURL, createdAt } = choosedProduct;
  return (
    <div>
      <h1>{title}</h1>
      <img src={imageURL} alt={title} width="300" height="auto" />
      <p>{description}</p>
      <p>Created at: {createdAt}</p>
      <Link to="form">Edit</Link>
      <br />
      <Link to="confirm">Remove</Link>
    </div>
  );
}
