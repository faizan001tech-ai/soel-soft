import express from 'express';
import cloudinary from '../config/cloudinary.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

// @desc    Upload image to Cloudinary
// @route   POST /api/upload
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
  try {
    const { image } = req.body; // base64 image

    if (!image) {
      return res.status(400).json({ message: 'No image provided' });
    }

    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: 'solestyle-products',
      resource_type: 'image',
      upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
    });

    res.json({
      success: true,
      url: uploadResponse.secure_url,
      public_id: uploadResponse.public_id,
    });
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    res.status(500).json({ message: 'Image upload failed', error: error.message });
  }
});

// @desc    Delete image from Cloudinary
// @route   DELETE /api/upload/:public_id
// @access  Private/Admin
router.delete('/:public_id', protect, admin, async (req, res) => {
  try {
    const { public_id } = req.params;
    await cloudinary.uploader.destroy(public_id);
    res.json({ success: true, message: 'Image deleted' });
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    res.status(500).json({ message: 'Image delete failed', error: error.message });
  }
});

export default router;
