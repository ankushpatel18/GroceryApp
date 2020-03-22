import { Action } from '../utils/types';
import { RESET_APP_STATE } from './ActionConstants';
import * as ActionConstants from './ActionConstants';
import { SAVE_ORDER } from '../utils/constant';

const initialState = {
    isInternetReachable: false,
    isConnected: false,
    isUserAuthenticated: false,
    productInfo: undefined,
    addressInfo: undefined,
    orderInfo : undefined,

}

export default (state = initialState, action: Action) => {
    console.log('###action.type '+action.type+' state : '+JSON.stringify(state));   
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
                ...state,
                isInternetReachable: state.isInternetReachable,
                isConnected: state.isConnected,
            }
            case SAVE_ORDER:
                return{
                    ...state,
                    orderInfo: action.payload
                }
                case ActionConstants.SAVE_ADDRESS:
                    return{
                        ...state,
                        addressInfo: action.payload
                    }
                    case ActionConstants.SAVE_ITEM:
                    return{
                        ...state,
                        productInfo: action.payload
                    }
        default: return state;
    }
}