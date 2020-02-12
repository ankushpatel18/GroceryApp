import {ACTIONS} from './LocationConstants';
import {Action} from '../../utils/types';

export const saveDeliveryLocation = (latitude, longitude): Action => {
  return {
    type: ACTIONS.SAVE_LOCATION,
    payload: {latitude: latitude, longitude: longitude},
  };
};
