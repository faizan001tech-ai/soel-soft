import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ShoppingBag, ShoppingCart, Heart, User, Sun, Moon, Menu, X, ChevronDown, LogOut, LayoutDashboard } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const { cartItemsCount } = useCart();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    );
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsProfileOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/about', label: 'About' },
  ];

  return (
    <nav 
      ref={navRef}
      className="sticky top-0 z-50 w-full backdrop-blur-xl border-b transition-all duration-300"
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        borderColor: 'rgba(212, 175, 55, 0.2)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8" style={{ color: '#D4AF37' }} />
            <span className="text-xl font-bold" style={{ 
              background: 'linear-gradient(135deg, #D4AF37 0%, #F9FAFB 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>SoleStyle</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-medium transition-all duration-200 hover:scale-105"
                style={{ color: '#F9FAFB' }}
                onMouseEnter={(e) => e.target.style.color = '#D4AF37'}
                onMouseLeave={(e) => e.target.style.color = '#F9FAFB'}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" style={{ color: '#D4AF37' }} />
              ) : (
                <Moon className="h-5 w-5" style={{ color: '#F9FAFB' }} />
              )}
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <Heart className="h-5 w-5" style={{ color: '#F9FAFB' }} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <ShoppingCart className="h-5 w-5" style={{ color: '#F9FAFB' }} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                  style={{ backgroundColor: '#D4AF37', color: '#0F172A' }}
                >
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-200"
                  style={{ backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full" />
                  ) : (
                    <User className="h-5 w-5" style={{ color: '#F9FAFB' }} />
                  )}
                  <span className="hidden sm:block text-sm font-medium" style={{ color: '#F9FAFB' }}>
                    {user?.name}
                  </span>
                  <ChevronDown className="h-4 w-4" style={{ color: '#9CA3AF' }} />
                </button>

                {/* Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg py-1 shadow-xl"
                    style={{ 
                      backgroundColor: '#111827', 
                      border: '1px solid rgba(212, 175, 55, 0.3)'
                    }}
                  >
                    <Link
                      to="/dashboard"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center px-4 py-2 text-sm transition-all duration-200"
                      style={{ color: '#F9FAFB' }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'; e.currentTarget.style.color = '#D4AF37'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#F9FAFB'; }}
                    >
                      <LayoutDashboard className="h-4 w-4 mr-2" />
                      Dashboard
                    </Link>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center px-4 py-2 text-sm transition-all duration-200"
                        style={{ color: '#F9FAFB' }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'; e.currentTarget.style.color = '#D4AF37'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#F9FAFB'; }}
                      >
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm transition-all duration-200"
                      style={{ color: '#EF4444' }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link
                  to="/login"
                  className="font-medium px-3 py-2 transition-all duration-200"
                  style={{ color: '#F9FAFB' }}
                  onMouseEnter={(e) => e.target.style.color = '#D4AF37'}
                  onMouseLeave={(e) => e.target.style.color = '#F9FAFB'}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
                  style={{ 
                    background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                    color: '#0F172A'
                  }}
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-all duration-200"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" style={{ color: '#F9FAFB' }} />
              ) : (
                <Menu className="h-6 w-6" style={{ color: '#F9FAFB' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-medium px-3 py-2 rounded-lg transition-all duration-200"
                  style={{ color: '#F9FAFB' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'; e.currentTarget.style.color = '#D4AF37'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#F9FAFB'; }}
                >
                  {link.label}
                </Link>
              ))}
              {!isAuthenticated && (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="font-medium px-3 py-2 transition-all duration-200"
                    style={{ color: '#F9FAFB' }}
                    onMouseEnter={(e) => e.target.style.color = '#D4AF37'}
                    onMouseLeave={(e) => e.target.style.color = '#F9FAFB'}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-center mx-3 text-sm font-medium px-4 py-2 rounded-lg"
                    style={{ 
                      background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                      color: '#0F172A'
                    }}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
