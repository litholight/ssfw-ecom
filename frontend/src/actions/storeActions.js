import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constants/userConstants';

import {
  STORE_DATA_REQUEST,
  STORE_DATA_SUCCESS,
  STORE_DATA_FAIL,
  STORE_UPDATE_REQUEST,
  STORE_UPDATE_SUCCESS,
  STORE_UPDATE_FAIL,
} from '../constants/storeConstants';

export const createStore = (email, password, storeName) => async (dispatch) => {
  console.log('trying to dispatch user login');
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config1 = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response1 = await axios.post(
      '/api/users/login',
      { email, password },
      config1
    );
    const { data: userData } = response1;

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: userData,
    });

    console.log('dispatched user login success');

    localStorage.setItem('userInfo', JSON.stringify(userData));

    const config2 = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data: response2 } = await axios.post(
      `/api/store`,
      { userId: userData._id, storeName },
      config2
    );
    return response2.data;
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getStoreDataFromIPorName = (ec2Name, ec2CreatedIP) => async (
  dispatch
) => {
  try {
    dispatch({ type: STORE_DATA_REQUEST });

    if (ec2Name) {
      const { data } = await axios.post('/api/store', {
        ec2Name,
      });

      dispatch({
        type: STORE_DATA_SUCCESS,
        payload: data,
      });
    } else {
      const { data } = await axios.post('/api/store', {
        ec2CreatedIP,
      });

      dispatch({
        type: STORE_DATA_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: STORE_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateStoreData = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: STORE_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const {
      store: { ec2CreatedIP },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/store`, { ec2CreatedIP }, config);

    dispatch({
      type: STORE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STORE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
