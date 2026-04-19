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
      title: 'Kids Collection',
      subtitle: 'Discover our adorable kids collection. Comfortable, durable, and stylish shoes for every adventure.',
      image: '/images/hero/slide-1-kids.png',
      cta: 'Shop Kids',
      link: '/shop?category=kids',
    },
    {
      id: 2,
      title: 'Men\'s Collection',
      subtitle: 'Premium men\'s footwear for every occasion. From formal classics to trendy sneakers.',
      image: '/images/hero/slide-2-men.jpg',
      cta: 'Shop Men',
      link: '/shop?category=men',
    },
    {
      id: 3,
      title: 'Men\'s Premium',
      subtitle: 'Exclusive men\'s collection with premium quality and modern designs.',
      image: '/images/hero/slide-2-men.png',
      cta: 'Shop Premium',
      link: '/shop?category=men',
    },
    {
      id: 4,
      title: 'Women\'s Collection',
      subtitle: 'Stunning women\'s collection. Heels, flats, boots, and sneakers for the modern woman.',
      image: '/images/hero/slide-3-women.jpg',
      cta: 'Shop Women',
      link: '/shop?category=women',
    },
    {
      id: 5,
      title: 'Sneaker Culture',
      subtitle: 'Trendy and comfortable sneakers for the whole family. Walk in style, walk in comfort.',
      image: '/images/hero/slide-4-sneakers.png',
      cta: 'Shop Sneakers',
      link: '/shop?category=sneakers',
    },
    {
      id: 6,
      title: 'Party Wear',
      subtitle: 'Make a statement with our party collection. Shine bright at every special occasion.',
      image: '/images/hero/slide-5-party.png',
      cta: 'Shop Party Wear',
      link: '/shop?category=party',
    },
    {
      id: 7,
      title: 'Complete Collection',
      subtitle: 'Everything you need in one place. Explore our complete range of footwear for all ages.',
      image: '/images/hero/slide-6-collection.png',
      cta: 'Shop All',
      link: '/shop',
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
    <section ref={heroRef} className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
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
                <div className="hero-animate flex items-center space-x-2 mb-2 md:mb-4">
                  <ShoppingBag className="h-4 w-4 md:h-5 md:w-5 text-primary-400" />
                  <span className="text-primary-400 font-medium tracking-wide uppercase text-xs md:text-sm">
                    Premium Fashion
                  </span>
                </div>
                <h1 className="hero-animate hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 md:mb-4">
                  {slide.title}
                </h1>
                <p className="hero-animate hero-subtitle text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 md:mb-8">
                  {slide.subtitle}
                </p>
                <div className="hero-animate hero-cta">
                  <Link
                    to={slide.link}
                    className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                  >
                    {slide.cta}
                    <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
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
