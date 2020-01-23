import { combineReducers } from 'redux'

import commonReducer from './CommonReducer';
import LoginReducer from '../screens/login/LoginReducer';


export default combineReducers ({
    commonReducer,
    LoginReducer
});
