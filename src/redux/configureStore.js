import { createStore, combineReducers, applyMiddleware } from 'redux';
import { MediaList } from './mediaList';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            mediaList: MediaList
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
