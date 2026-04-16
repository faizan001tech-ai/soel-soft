import { useState, useEffect, createContext, useContext } from 'react';
import api from '../config/api';
import { useAuth } from './AuthContext';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(false);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      fetchCart();
    } else {
      setCart({ items: [] });
    }
  }, [isAuthenticated]);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/cart');
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to cart');
      return;
    }
    try {
      const response = await api.post('/api/cart', { productId, quantity });
      setCart(response.data);
      toast.success('Item added to cart');
    } catch (error) {
      toast.error('Failed to add item to cart');
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const response = await api.put(
        `/api/cart/${productId}`,
        { quantity }
      );
      setCart(response.data);
    } catch (error) {
      toast.error('Failed to update quantity');
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await api.delete(`/api/cart/${productId}`);
      setCart(response.data);
      toast.success('Item removed from cart');
    } catch (error) {
      toast.error('Failed to remove item');
    }
  };

  const clearCart = async () => {
    try {
      await api.delete('/api/cart');
      setCart({ items: [] });
    } catch (error) {
      toast.error('Failed to clear cart');
    }
  };

  const cartTotal = cart.items?.reduce((total, item) => {
    return total + (item.product?.price || 0) * item.quantity;
  }, 0) || 0;

  const cartItemsCount = cart.items?.reduce((total, item) => total + item.quantity, 0) || 0;

  const value = {
    cart,
    loading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartItemsCount,
    refreshCart: fetchCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
