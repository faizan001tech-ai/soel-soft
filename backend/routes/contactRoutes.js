import express from 'express';
import {
  createMessage,
  getMessages,
  getMessageById,
  updateMessageStatus,
  deleteMessage
} from '../controllers/contactController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

// Public route - anyone can submit a contact message
router.post('/', createMessage);

// Admin routes - only admins can view/manage messages
router.get('/', protect, admin, getMessages);
router.get('/:id', protect, admin, getMessageById);
router.put('/:id', protect, admin, updateMessageStatus);
router.delete('/:id', protect, admin, deleteMessage);

export default router;
