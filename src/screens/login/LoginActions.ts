
import * as ActionConstants from './LoginConstants';

export const authenticateUser = (payload) => {
    return {
        type: ActionConstants.AUTHENTICATE_USER,
        payload: payload
    }
}
export const authenticateUserSuccess = (payload) => {
    return {
        type: ActionConstants.AUTHENTICATE_USER_SUCCESS,
        payload: payload
    }
}
export const authenticateUserFailure = (payload) => {
    return {
        type: ActionConstants.AUTHENTICATE_USER_FAILURE,
        payload: payload
    }
}



