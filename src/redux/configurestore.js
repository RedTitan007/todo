import { createStore,applyMiddleware, compose } from 'redux';

import rootReducer from './root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configurestore = createStore(rootReducer,composeEnhancers(applyMiddleware()));


export default configurestore
