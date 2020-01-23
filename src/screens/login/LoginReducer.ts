import { Action } from '../../utils/types';
import * as ActionConstants from './LoginConstants';
import {RESET_APP_STATE} from '../../redux/ActionConstants';
const initialState = {
    authenticationInProgress: false,
    authenticationErrorMessage: '',
    userAuthenticated: false,
    authenticationFailureType: undefined
}

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionConstants.AUTHENTICATE_USER:
            return {
                ...state,
                authenticationInProgress: true,
                authenticationErrorMessage: ''
            }
        case ActionConstants.AUTHENTICATE_USER_SUCCESS:
            return {
                ...state,
                authenticationInProgress: false,
                authenticationErrorMessage: '',
                userAuthenticated: true
            }
        case ActionConstants.AUTHENTICATE_USER_FAILURE:
            return {
                ...state,
                authenticationInProgress: false,
                authenticationErrorMessage: action.payload.failureType,
                authenticationFailureType: action.payload.failureType,
            }
        case RESET_APP_STATE:
            return initialState;
        default: return state;
    }
}