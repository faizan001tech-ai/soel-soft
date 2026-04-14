# Windsurf Gear - MERN Stack E-Commerce Application

A full-stack e-commerce application for watersports equipment built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Modern UI/UX**: Glassmorphism design with premium animations using GSAP
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Authentication**: JWT-based auth with role-based access control
- **Product Management**: CRUD operations for products with categories
- **Shopping Cart**: Persistent cart with quantity management
- **Checkout**: Cash on Delivery payment with order tracking
- **User Dashboard**: Order history and profile management
- **Admin Panel**: Dashboard with stats, product/order/user management
- **Dark/Light Mode**: Full theme support across the application
- **Animations**: Smooth transitions with GSAP and scroll-triggered animations

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas with Mongoose
- JWT Authentication
- bcrypt.js for password hashing

### Frontend
- React 18 with Vite
- Tailwind CSS
- Material UI Components
- GSAP for animations
- React Slick for carousels
- React Router DOM
- Axios for API calls
- React Hot Toast for notifications

## Project Structure

```
windsurf-gear/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   ├── auth.js            # Authentication logic
│   │   ├── cart.js            # Cart operations
│   │   ├── orders.js          # Order management
│   │   ├── products.js        # Product CRUD
│   │   └── users.js           # User management
│   ├── middleware/
│   │   └── auth.js            # JWT middleware
│   ├── models/
│   │   ├── Cart.js            # Cart model
│   │   ├── Order.js           # Order model
│   │   ├── Product.js         # Product model
│   │   └── User.js            # User model
│   ├── routes/
│   │   ├── auth.js            # Auth routes
│   │   ├── cart.js            # Cart routes
│   │   ├── orders.js          # Order routes
│   │   ├── products.js        # Product routes
│   │   └── users.js           # User routes
│   ├── package.json
│   └── server.js              # Entry point
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/         # Reusable components
    │   │   ├── BestSellers.jsx
    │   │   ├── CategorySection.jsx
    │   │   ├── FeaturedProducts.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Hero.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── ProductCard.jsx
    │   │   ├── PromoBanner.jsx
    │   │   ├── ProtectedRoute.jsx
    │   │   ├── AdminRoute.jsx
    │   │   └── Testimonials.jsx
    │   ├── context/           # React Context providers
    │   │   ├── AuthContext.jsx
    │   │   ├── CartContext.jsx
    │   │   └── ThemeContext.jsx
    │   ├── pages/             # Page components
    │   │   ├── AdminPanel.jsx
    │   │   ├── Cart.jsx
    │   │   ├── Checkout.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── ProductDetails.jsx
    │   │   ├── Register.jsx
    │   │   └── Shop.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    ├── tailwind.config.js
    └── vite.config.js
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Git

### 1. Clone the Repository

```bash
git clone <repository-url>
cd windsurf-gear
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/windsurf-gear?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
```

To get your MongoDB URI:
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a cluster (free tier available)
3. Click "Connect" → "Drivers" → "Node.js"
4. Copy the connection string and replace `<username>` and `<password>`

**Seed initial admin user:**

You can create an admin user by registering a user and then manually updating their role in MongoDB Atlas, or by creating a seed script.

Start the backend server:

```bash
npm run dev
```

The server will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update profile (protected)

### Products
- `GET /api/products` - Get all products (with filters, pagination)
- `GET /api/products/featured` - Get featured products
- `GET /api/products/bestsellers` - Get bestsellers
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)
- `POST /api/products/:id/reviews` - Add review (protected)

### Cart
- `GET /api/cart` - Get user's cart (protected)
- `POST /api/cart` - Add item to cart (protected)
- `PUT /api/cart/:productId` - Update cart item quantity (protected)
- `DELETE /api/cart/:productId` - Remove item from cart (protected)
- `DELETE /api/cart` - Clear cart (protected)

### Orders
- `GET /api/orders` - Get all orders (admin)
- `GET /api/orders/myorders` - Get user's orders (protected)
- `GET /api/orders/:id` - Get order by ID (protected)
- `POST /api/orders` - Create order (protected)
- `PUT /api/orders/:id/status` - Update order status (admin)
- `PUT /api/orders/:id/pay` - Mark order as paid (protected)

### Users (Admin Only)
- `GET /api/users` - Get all users
- `GET /api/users/stats/summary` - Get user statistics
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## User Roles

- **User**: Can browse products, manage cart, place orders, view own order history
- **Admin**: All user features + manage products, manage all orders, manage users, view statistics

## Making a User Admin

To make a user an admin, you need to update their role directly in MongoDB:

1. Go to MongoDB Atlas
2. Navigate to your cluster → Browse Collections
3. Find the `users` collection
4. Find the user document and change `role` from `"user"` to `"admin"`

## Features to Add (Future Enhancements)

- [ ] Stripe payment integration
- [ ] Image upload with Cloudinary
- [ ] Email notifications
- [ ] Product search with autocomplete
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Inventory management
- [ ] Discount/coupon system
- [ ] Multi-language support
- [ ] Analytics dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@windsurfgear.com or join our Slack channel.

---

Built with by the Windsurf Gear Team
