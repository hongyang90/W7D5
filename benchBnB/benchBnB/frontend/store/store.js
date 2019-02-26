import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const configureStore = (preloadedstate)  => {
    return createStore(rootReducer, preloadedstate, applyMiddleware(thunk, logger))
};

export default configureStore;