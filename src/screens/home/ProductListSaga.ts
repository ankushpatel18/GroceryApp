import { call, put, takeLatest, select } from 'redux-saga/effects';
import { FETCH_PRODUCTS } from './ProductListConstants';
import { isInternetConnected } from '../../utils/utility';
import Log from '../../utils/Logger';

const TAG = "ProductListSaga"
export default function* watcherSaga() {
    yield takeLatest(FETCH_PRODUCTS, fetchLatestProducts)
}

export function* fetchLatestProducts() {
    const isInternet = yield* isInternetConnected()
    if (isInternet) {
        const path = "https://us-central1-test-app-6ef40.cloudfunctions.net/app/products"
        fetch(path, {
            method: 'POST'
        		})
		.then((response) => response.json())
		.then((responseData) => {
			Log.i(TAG, 'api response' + JSON.stringify(responseData))
            // const response = (responseData.data)
            
		})
		.catch((error) => {
			Log.e(TAG, 'error while api ' + path + ' hit: ' + JSON.stringify(error), true)
			
		});
	}
}