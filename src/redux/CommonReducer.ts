import { Action } from '../utils/types';
import { RESET_APP_STATE } from './ActionConstants';
import * as ActionConstants from './ActionConstants';

const initialState = {
    isInternetReachable: false,
    isConnected: false,
    isUserAuthenticated: false
}

export default (state = initialState, action: Action) => {

    switch (action.type) {
        case ActionConstants.INTERNET_CHANGED:
            const updatedState = {
                ...state, isInternetReachable: action.payload.isInternetReachable,
                isConnected: action.payload.isConnected,
            };
            return updatedState;

        case ActionConstants.IS_USER_AUTHENTICATED:
            return {
                ...state,
                isUserAuthenticated: action.payload
            };
        case RESET_APP_STATE:
            return {
                ...initialState,
                isInternetReachable: state.isInternetReachable,
                isConnected: state.isConnected,
            }
        default: return state;
    }
}