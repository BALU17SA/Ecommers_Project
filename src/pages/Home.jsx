import { Categories, mockData } from '../assets/mockData';
import HeroImage from "../assets/Images/Hero.png";
import InfoSection from '../components/InfoSection';
import CategorySection from '../components/CategorySection';
import { setProducts } from '../redux/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Shop from './Shop';
import Slides from './Slides';

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  const products = useSelector(state => state.product);
  console.log(products);

  return (
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <Slides />
      <InfoSection />
      <CategorySection />
      <div className="my-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold mb-4">Top Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;
