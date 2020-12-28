import mongoose from 'mongoose';

const storeSchema = mongoose.Schema(
  {
    storeName: {
      type: String,
      default: 'Your new store',
    },
    ec2Name: {
      type: String,
      required: true,
    },
    ec2CreatedIP: {
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
