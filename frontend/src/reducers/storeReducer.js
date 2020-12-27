import { STORE_CREATE_SUCCESS } from '../constants/storeContants';

export const storeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_CREATE_SUCCESS:
      return { storeData: action.payload };
    default:
      return state;
  }
};
