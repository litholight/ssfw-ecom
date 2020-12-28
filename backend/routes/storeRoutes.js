import express from 'express';
const router = express.Router();
import {
  createStore,
  getStoreDataFromIPorName,
  updateStoreData,
} from '../controllers/storeController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// router.route('/data').post(getStoreDataFromIPorName);
router
  .route('/')
  .post(getStoreDataFromIPorName)
  .put(protect, admin, updateStoreData);

export default router;
