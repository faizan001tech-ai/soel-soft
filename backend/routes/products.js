import express from 'express';
import {
  getProducts,
  getProductById,
  getFeaturedProducts,
  getBestsellers,
  createProduct,
  updateProduct,
  deleteProduct,
  createReview,
  getRelatedProducts,
} from '../controllers/products.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getProducts);
router.get('/featured', getFeaturedProducts);
router.get('/bestsellers', getBestsellers);
router.get('/:id', getProductById);
router.get('/:id/related', getRelatedProducts);

// Protected routes
router.post('/:id/reviews', protect, createReview);

// Admin routes
router.post('/', protect, admin, createProduct);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

export default router;
