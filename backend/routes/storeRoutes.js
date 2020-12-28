import express from 'express';
const router = express.Router();
import {
  createStore,
  getStoreDataFromIP,
  updateStoreData,
} from '../controllers/storeController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router
  .route('/')
  .post(protect, admin, createStore)
  .put(protect, admin, updateStoreData);
router.route('/data').post(getStoreDataFromIP);

export default router;
