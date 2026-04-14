import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, Wind, Waves, Anchor, ShoppingBag } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const slidesRef = useRef([]);

  const slides = [
    {
      id: 1,
      title: 'Step Into Style with Premium Footwear',
      subtitle: 'Discover our latest collection of trendy shoes for every occasion. Comfort meets fashion.',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&h=1080&fit=crop',
      cta: 'Shop Shoes',
      link: '/shop?category=shoes',
    },
    {
      id: 2,
      title: 'Elevate Your Wardrobe',
      subtitle: 'Premium clothing collection designed for style and comfort. Express yourself.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1920&h=1080&fit=crop',
      cta: 'Shop Clothing',
      link: '/shop?category=clothing',
    },
    {
      id: 3,
      title: 'Complete Your Look',
      subtitle: 'Accessories that make the difference. From bags to belts, find your perfect match.',
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=1920&h=1080&fit=crop',
      cta: 'Shop Accessories',
      link: '/shop?category=accessories',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-title',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.3 }
      );
      gsap.fromTo(
        '.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.5 }
      );
      gsap.fromTo(
        '.hero-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.7 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => {
      gsap.fromTo(
        slidesRef.current[next]?.querySelectorAll('.hero-animate'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      );
    },
  };

  return (
    <section ref={heroRef} className="relative h-[600px] lg:h-[700px] overflow-hidden">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative h-[600px] lg:h-[700px]">
            {/* Background Image */}
            <div 
              ref={(el) => (slidesRef.current[index] = el)}
              className="absolute inset-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-xl text-white">
                {/* Logo */}
                <div className="hero-animate flex items-center space-x-2 mb-4">
                  <ShoppingBag className="h-5 w-5 text-primary-400" />
                  <span className="text-primary-400 font-medium tracking-wide uppercase text-sm">
                    Premium Fashion
                  </span>
                </div>
                <h1 className="hero-animate hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  {slide.title}
                </h1>
                <p className="hero-animate hero-subtitle text-lg md:text-xl text-gray-200 mb-8">
                  {slide.subtitle}
                </p>
                <div className="hero-animate hero-cta">
                  <Link
                    to={slide.link}
                    className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    {slide.cta}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-colors"
    >
      <ChevronLeft className="h-6 w-6 text-white" />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-colors"
    >
      <ChevronRight className="h-6 w-6 text-white" />
    </button>
  );
};

export default Hero;
