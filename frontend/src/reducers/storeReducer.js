import {
  STORE_CREATE_SUCCESS,
  STORE_DATA_REQUEST,
  STORE_DATA_SUCCESS,
  STORE_DATA_FAIL,
} from '../constants/storeConstants';

export const storeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_CREATE_SUCCESS:
      return { storeData: action.payload };
    default:
      return state;
  }
};

export const storeDataReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_DATA_REQUEST:
      return { loading: true };
    case STORE_DATA_SUCCESS:
      return { loading: false, storeData: action.payload };
    case STORE_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
