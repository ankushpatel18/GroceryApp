import * as Actions from './ActionConstants';
import { Action } from '../utils/types';
import { SAVE_ORDER } from '../utils/constant';

export function changeInternetState(internetState): Action {
  return {
    type: Actions.INTERNET_CHANGED,
    payload: internetState
  }
}

export function selectProfilePicture() {
  return {
    type : Actions.PICK_PROFILE_PICTURE
  }
}
export function resetAppState() {
  return {
    type: Actions.RESET_APP_STATE,
  }
}

export const storeOrderInfo = (orderInfo)  =>{
  return {
    type : SAVE_ORDER,
    payload: orderInfo
  }
}

export const storeAddressInfo = (addressInfo) => {
  return {
    type: Actions.SAVE_ADDRESS,
    payload: addressInfo
  }
}


export const storeItemInfo = (itemInfo) => {
  return {
    type: Actions.SAVE_ITEM,
    payload: itemInfo
  }
}