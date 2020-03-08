import {  all } from 'redux-saga/effects'


import LoginSaga from '../screens/login/LoginSaga';
import CommonSaga from './CommonSaga';
import ProductListSaga from '../screens/home/ProductListSaga';
import MyOderSaga from '../screens/myorders/MyOrderSaga';

function* rootSaga () {
    yield all([
        //Add declaration for sagas of app here
        CommonSaga(),
        LoginSaga(),
        ProductListSaga(),
        MyOderSaga(),
        ]);
}

export default rootSaga;