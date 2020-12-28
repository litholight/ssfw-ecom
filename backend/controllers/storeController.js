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

// @desc    Get store data by ec2Name
// @route   POST /api/store/data
// @access  Public
const getStoreDataFromIP = asyncHandler(async (req, res) => {
  const { ec2Name } = req.body;

  // console.log(ec2Name);

  const store = await Store.findOne({ ec2Name });

  if (store) {
    res.json({
      storeName: store.storeName,
      ec2CreatedIP: store.ec2CreatedIP,
    });
  } else {
    res.status(404);
    throw new Error('Store not found');
  }
});

// @desc    Update store data
// @route   PUT /api/store
// @access  Admin
const updateStoreData = asyncHandler(async (req, res) => {
  console.log(req.body.ec2CreatedIP);
  const store = await Store.findOne({ ec2CreatedIP: req.body.ec2CreatedIP });

  if (store) {
    store.storeName = req.body.storeName || store.storeName;

    const updatedStore = await store.save();

    res.json({
      storeName: updatedStore.storeName,
    });
  } else {
    res.status(404);
    throw new Error('Store not found');
  }
});

export { createStore, getStoreDataFromIP, updateStoreData };
