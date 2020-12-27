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
      _id: newStore._id,
      userId,
      storeName,
    });
  } else {
    res.status(400);
    throw new Error('Invalid data');
  }
});

// @desc    Get store data by id
// @route   GET /api/store/:id
// @access  Public
const getStoreData = asyncHandler(async (req, res) => {
  const store = await Store.findById(req.store._id);

  if (store) {
    res.json({
      _id: store._id,
      userId: user.name,
      storeName: store.storeName,
    });
  } else {
    res.status(404);
    throw new Error('Store not found');
  }
});

export { createStore };
