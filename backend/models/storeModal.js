import mongoose from 'mongoose';

const storeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    companyName: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const Store = mongoose.model('Store', storeSchema);

export default Product;
