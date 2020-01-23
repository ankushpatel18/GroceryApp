import * as Actions from './ActionConstants';
import { Action } from '../utils/types';

export function changeInternetState(internetState): Action {
  return {
    type: Actions.INTERNET_CHANGED,
    payload: internetState
  }
}

export function resetAppState() {
  return {
    type: Actions.RESET_APP_STATE,
  }
}