import asyncHandler from 'express-async-handler';
import Store from '../models/storeModel.js';

// @desc    Create store
// @route   POST /api/store
// @access  Admin
const createStore = asyncHandler(async (req, res) => {
  const { userId, storeName } = req.body;

  const newStore = await Store.create({
    userId,
    storeName,
  });

  if (newStore) {
    res.status(201).json({
      userId,
      storeName,
    });
  } else {
    res.status(400);
    throw new Error('Invalid data');
  }
});

export { createStore };
