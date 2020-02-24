import {Action} from '../../utils/types';
import {SAVE_PRODUCTS} from './ProductListConstants';

const initialState = {
  productsList: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SAVE_PRODUCTS: {
      return {
        ...state,
        productsList: action.payload,
      };
    }
    default:
      return state;
  }
};
