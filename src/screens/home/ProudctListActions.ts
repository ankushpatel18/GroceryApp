import { FETCH_PRODUCTS } from "./ProductListConstants"

export const fetchProductsFromServer = () => {
    return {
        type: FETCH_PRODUCTS
    }
}