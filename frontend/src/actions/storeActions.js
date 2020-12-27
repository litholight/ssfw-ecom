import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constants/userConstants';

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

// export const getStoreData = (keyword = '') => async (dispatch) => {
//   try {
//     dispatch({ type: STORE_DETAILS_REQUEST });

//     const { data } = await axios.get(``);

//     dispatch({
//       type: PRODUCT_LIST_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_LIST_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
