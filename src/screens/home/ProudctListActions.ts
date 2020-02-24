import { FETCH_PRODUCTS, SAVE_PRODUCTS } from "./ProductListConstants"

export const fetchProductsFromServer = () => {
    return {
        type: FETCH_PRODUCTS
    }
}

export const storeProductsArray = (productsArray)  =>{
    return {
      type : SAVE_PRODUCTS,
      payload: productsArray
    }
  }