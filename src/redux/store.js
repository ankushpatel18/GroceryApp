import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk';
import promise from '../promise';
import reducer from './reducers';
import rootSaga from './RootSaga';

const sagaMiddleware = createSagaMiddleware()
export default function configureStore () {
	const enhancer = compose(
		applyMiddleware(
			sagaMiddleware,
			promise
		)
	);

	const store = createStore(reducer, enhancer);
	sagaMiddleware.run(rootSaga);
	return store;
}

