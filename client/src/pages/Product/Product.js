import { useParams } from 'react-router';
import { useData } from '../../context/DataContext';
import ProductDetail  from '../../components/ProductDetail/ProductDetail';

export const Product = () => {
   const { state } = useData();
   const { products } = state;
   const { id } = useParams();
  
   const product = products.find((item) => item._id === id);
  
   return <>{product ? <ProductDetail product={product} /> : <div></div>}</>;
};
