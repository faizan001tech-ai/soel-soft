import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: 0,
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    enum: ['windsurfing', 'kitesurfing', 'paddleboarding', 'surfing', 'accessories', 'apparel', 'electronics', 'fitness', 'shoes', 'clothing', 'bags'],
  },
  originalPrice: {
    type: Number,
    min: 0,
    default: null,
  },
  section: {
    type: String,
    default: '',
  },
  age: {
    type: String,
    default: '',
    enum: ['', 'all', 'kids', 'teens', 'adults', 'seniors'],
  },
  images: [{
    type: String,
    required: true,
  }],
  brand: {
    type: String,
    default: '',
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  reviews: [reviewSchema],
  featured: {
    type: Boolean,
    default: false,
  },
  bestseller: {
    type: Boolean,
    default: false,
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
}, {
  timestamps: true,
});

// Virtual for discounted price
productSchema.virtual('discountedPrice').get(function() {
  return this.price - (this.price * this.discount / 100);
});

const Product = mongoose.model('Product', productSchema);
export default Product;
