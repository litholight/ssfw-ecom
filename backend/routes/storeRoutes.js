import express from 'express';
const router = express.Router();
import { createStore } from '../controllers/storeController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(protect, admin, createStore);

export default router;
