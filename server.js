const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');



dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Route imports
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');

// ✅ Step 3: Connect Routes in server.js
app.use('/api/auth', authRoutes);           // Auth routes
app.use('/api/users', userRoutes);         // User routes
app.use('/api/restaurants', restaurantRoutes); // Restaurant routes
app.use('/api/foods', foodRoutes);         // Food routes
app.use('/api/orders', orderRoutes);       // Order routes
app.use('/api/cart', cartRoutes);           // Cart routes

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
