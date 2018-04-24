import { createStore, applyMiddleware } from 'redux';
import app from './reducers';

// import { createEpicMiddleware } from 'redux-observable';
// import from ''

export default function configureStore() {
    let store = createStore(app)
    return store;
}