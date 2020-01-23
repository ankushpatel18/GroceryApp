import { put, takeLatest } from 'redux-saga/effects';

import * as ActionConstants from './ActionConstants';



export default function* watcherFCMTokenSaga() {

    yield takeLatest(ActionConstants.AUTHENTICATE_USER_SUCCESS, setUserAuthStatus);
    yield takeLatest(ActionConstants.AUTHENTICATE_USER_FAILURE, setUserAuthStatus);
}

export function* setUserAuthStatus(action){
    
    switch(action.type){
        case ActionConstants.AUTHENTICATE_USER_SUCCESS:
            yield put({type:ActionConstants.IS_USER_AUTHENTICATED,payload:true});
            break;
        case ActionConstants.AUTHENTICATE_USER_FAILURE:
            yield put({type:ActionConstants.IS_USER_AUTHENTICATED,payload:false});
            break;
        default:
            yield put({type:ActionConstants.IS_USER_AUTHENTICATED,payload:false});    
            break;
    }

}


