import express from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Cookie parser middleware
app.use(cookieParser());

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));