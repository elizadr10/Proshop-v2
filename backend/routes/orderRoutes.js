import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js'
import { protect, admin } from '../middleware/authMiddleware.js'
import {addOrderItems, getMyOrders, getOrderById, updateOrderToPaid, updateOrderToDelivered, getOrders} from '../controllers/orderController.js'

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;