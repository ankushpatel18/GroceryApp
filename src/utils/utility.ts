import { select } from 'redux-saga/effects';

/**
 * Provides currently synced internet state.
 */
export function* isInternetConnected(){
    const {commonReducer} = yield select();
    const isNetConnected = commonReducer.isConnected && commonReducer.isInternetReachable;
    return isNetConnected;
}
