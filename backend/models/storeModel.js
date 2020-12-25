import mongoose from 'mongoose';

const storeSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    storeName: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const Store = mongoose.model('Store', storeSchema);

export default Store;
