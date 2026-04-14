import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import BestSellers from '../components/BestSellers';
import PromoBanner from '../components/PromoBanner';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <PromoBanner />
      <BestSellers />
      <Testimonials />
    </div>
  );
};

export default Home;
