import { combineReducers } from 'redux'

import commonReducer from './CommonReducer';
import LoginReducer from '../screens/login/LoginReducer';
import productListReducer from '../screens/home/ProductListReducer';

export default combineReducers ({
    commonReducer,
    LoginReducer,
    productListReducer
});
