import {  all } from 'redux-saga/effects'


import LoginSaga from '../screens/login/LoginSaga';
import CommonSaga from './CommonSaga';
import ProductListSaga from '../screens/home/ProductListSaga';

function* rootSaga () {
    yield all([
        //Add declaration for sagas of app here
        CommonSaga(),
        LoginSaga(),
        ProductListSaga(),
        ]);
}

export default rootSaga;