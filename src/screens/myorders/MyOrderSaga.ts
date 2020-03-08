import { call, put, takeLatest, select } from 'redux-saga/effects';
import Log from '../../utils/Logger';
import { SAVE_ORDER } from '../../utils/constant';
import OrdersRepo from '../../database/OrdersRepo';

const TAG = "OrderListSaga"
export default function* watcherSaga() {
    yield takeLatest(SAVE_ORDER, saveOrders)
}

export function* saveOrders(action) {
    const orderRepo = yield OrdersRepo.build();
    yield orderRepo.saveOrder(action.payload);
}