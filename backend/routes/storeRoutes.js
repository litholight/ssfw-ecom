import express from 'express';
const router = express.Router();
import {
  createStore,
  getStoreDataFromIP,
} from '../controllers/storeController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(protect, admin, createStore);
router.route('/data').post(getStoreDataFromIP);

export default router;
