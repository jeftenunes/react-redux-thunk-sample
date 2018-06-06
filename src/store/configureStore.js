import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState, 
        applyMiddleware(thunk)
    );
};