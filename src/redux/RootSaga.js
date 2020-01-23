import {  all } from 'redux-saga/effects'


import LoginSaga from '../screens/login/LoginSaga';
import CommonSaga from './CommonSaga';

function* rootSaga () {
    yield all([
        //Add declaration for sagas of app here
        CommonSaga(),
        LoginSaga()
        ]);
}

export default rootSaga;