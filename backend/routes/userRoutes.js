import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js'
import { protect, admin } from '../middleware/authMiddleware.js'
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserById,  deleteUser, updateUser} from '../controllers/userController.js'

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/auth', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;