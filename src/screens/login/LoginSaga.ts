import { call, put, takeLatest, select } from 'redux-saga/effects';
import _ from 'lodash';

import * as LoginConstants from './LoginConstants';
import * as LoginActions from './LoginActions';

import * as Services from './LoginService';
import Log from '../../utils/Logger';

const TAG_LOGIN_SAGA = 'LoginSaga';

export default function* watcherSaga() {
    yield takeLatest(LoginConstants.AUTHENTICATE_USER, authenticateUser)
}

/*
   * Start Authenticating user
   * Validate user credentials locally 
   * Check Internet connection
   * Checks whether client has OpenID server config(Token Endpoint)
*/
export function* authenticateUser(action) {
    if (!validateUserCredentials(action.payload.username, action.payload.password)) {
        yield put(LoginActions.authenticateUserFailure({failureType: LoginConstants.LOGIN_ERROR.local_validation, maxloginAttempts:undefined }));
    }
    else {
        yield* performUserAuthentication(action.payload)
    }
}

/*
  * Call Open Id server authentication Api
*/
export function* performUserAuthentication(payload) {
        const state = yield select()
        const { LoginReducer } = state;
    
        //Call login API
        if (LoginReducer && LoginReducer.tokenEndpoint) {
            let formData = new FormData();
            formData.append('username', payload.username)
            formData.append('password', payload.password)
            const loginResponse = yield call(Services.authenticateUser, LoginReducer.tokenEndpoint, formData, {'Content-Type': 'multipart/form-data'});
            if (loginResponse.success) {
                Log.i(TAG_LOGIN_SAGA, 'authenticateUser success: ' + loginResponse);
    
            } else {
                let errorDescription = LoginConstants.LOGIN_ERROR.invalid_user
                Log.i(TAG_LOGIN_SAGA, 'authenticateUser falied: ' + errorDescription);
            }
        }
    
   
}


/*
  *Validate user credentials on client end
*/
export function validateUserCredentials(username, password) {
    return (!(_.isEmpty(username) || _.isEmpty(password)))
}