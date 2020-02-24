import { call, put, takeLatest, select } from 'redux-saga/effects';
import { FETCH_PRODUCTS } from './ProductListConstants';
import { isInternetConnected } from '../../utils/utility';
import Log from '../../utils/Logger';
import { storeProductsArray } from './ProudctListActions';
import { fetchProductListApi } from './ProductApiServices';

const TAG = "ProductListSaga"
export default function* watcherSaga() {
    yield takeLatest(FETCH_PRODUCTS, fetchLatestProducts)
}

export function* fetchLatestProducts() {
    Log.i(TAG, 'API calling started for API ')
    const isInternet = yield* isInternetConnected()
    if (isInternet) {
        const path = "https://us-central1-test-app-6ef40.cloudfunctions.net/app/products"
        Log.i(TAG, 'API calling started for API '+path  )
        const response = yield call(fetchProductListApi, path);
        console.log((response.products.length))
       yield put(storeProductsArray(response.products));

        // fetch(path, {
        //     method: 'GET'
        // 		})
		// .then((response) => response.json())
		// .then((responseData) => {
        //     Log.i(TAG, 'api response' + (responseData.products))
        //     console.log((responseData))
        //      put(storeProductsArray(responseData.products));
        //     // const response = (responseData.data)
            
		// })
		// .catch((error) => {
		// 	Log.e(TAG, 'error while api ' + path + ' hit: ' + JSON.stringify(error), true)
			
		// });
	}
}